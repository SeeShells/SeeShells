using System;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.ComponentModel.Design;
using System.Diagnostics;
using System.Windows.Controls;
using System.Windows.Data;
using SeeShellsV3.Data;
using SeeShellsV3.Events;
using SeeShellsV3.Repositories;
using SeeShellsV3.UI;
using Unity;

namespace SeeShellsV3.Services
{
    public class TimezoneManager: ITimezoneManager
    {
        public Timezone CurrentTimezone { get; set; } = new Timezone("Coordinated Universal Time", 0d);

        public Collection<Timezone> SupportedTimezones { get; init; } = new Collection<Timezone>();

        private IShellEventCollection ShellEvents { get; set; }
        private IShellItemCollection ShellItems { get; set; }
        private ISelected Selected { get; set; }

        [Dependency] public IShellEventManager ShellEventManager { get; set; }



        public TimezoneManager(
            [Dependency] IShellEventCollection shellEvents,
            [Dependency] IShellItemCollection shellItems,
            [Dependency] ISelected selected
        )
        {
            ShellItems = shellItems;
            ShellEvents = shellEvents;
            Selected = selected;


            // Populates SupportedTimezones with all the timezones currently available in SeeShells
            SupportedTimezones.Add(new Timezone("Coordinated Universal Time", 0d));
            SupportedTimezones.Add(new Timezone("Eastern Standard Time", -5d));
            SupportedTimezones.Add(new Timezone("Central Standard Time", -6d));
            SupportedTimezones.Add(new Timezone("Mountain Standard Time", -7d));
            SupportedTimezones.Add(new Timezone("Pacific Standard Time", -8d));
        }


        /// <summary>
        /// Handles the changing of timestamps throughout the application.
        /// </summary>
        public void TimezoneChangeHandler(string timezone)
        {
            // Store the timezone that we are switching from for conversion purposes
            Timezone oldTimezone = CurrentTimezone;

            
            // Update CurrentTimezone to the new timezone
            CurrentTimezone = GetTimezone(timezone);

            if (oldTimezone.Equals(CurrentTimezone))
            {
                return;
            }

            // Loop through all ShellItems and update their timestamps
            foreach (var shellItem in ShellItems)
            {
                // Update timestamps that all ShellItems have
                shellItem.SlotModifiedDate = ConvertTimezone(shellItem.SlotModifiedDate, oldTimezone);
                shellItem.LastRegistryWriteDate = ConvertTimezone(shellItem.LastRegistryWriteDate, oldTimezone);

                // Switch on ShellItem type to update timestamps that only specific types of ShellItems have
                switch (shellItem)
                {
                    case CompressedFolderShellItem compressedFolderShellItem:
                        compressedFolderShellItem.ModifiedDate = ConvertTimezone(compressedFolderShellItem.ModifiedDate, oldTimezone);
                        break;
                    case FileEntryShellItem fileEntryShellItem:
                        fileEntryShellItem.ModifiedDate = ConvertTimezone(fileEntryShellItem.ModifiedDate, oldTimezone);
                        fileEntryShellItem.AccessedDate = ConvertTimezone(fileEntryShellItem.AccessedDate, oldTimezone);
                        fileEntryShellItem.CreationDate = ConvertTimezone(fileEntryShellItem.CreationDate, oldTimezone);
                        break;
                    case UriShellItem uriShellItem:
                        uriShellItem.ConnectedDate = ConvertTimezone(uriShellItem.ConnectedDate, oldTimezone);
                        break;
                }
            }


            // Loop through all ShellEvents and update their timestamps
            foreach (ShellEvent shellEvent in ShellEvents)
            {
                shellEvent.TimeStamp = ConvertTimezone(shellEvent.TimeStamp, oldTimezone);
            }


            Selected.CurrentInspector = null;
            Selected.CurrentData = null;

            ShellEvents.FilteredView.Refresh();
            ShellItems.FilteredView.Refresh();


        }

        /// <summary>
        /// Wrapper for the various ConvertTime functions to avoid errors when converting DateKind objects
        /// with type Utc. Also allows nullable DateTimes to be converted.
        /// </summary>
        /// <param name="dateTime">DateTime object to be converted.</param>
        /// <param name="oldTimezone">The timezone being switched from.</param>
        /// <returns>A DateTime object representing the same time <see cref="input"/> does, in the timezone of <see cref="CurrentTimezone"/></returns>
        private DateTime ConvertTimezone(DateTime dateTime, Timezone oldTimezone)
        {
            if(oldTimezone  == null || oldTimezone.Offset == null)
                throw new TimezoneNotSupportedException();

            if (IsValidDate(dateTime))
            {
                dateTime = dateTime.Add(oldTimezone.Offset.Inverse);
                dateTime = dateTime.Add(CurrentTimezone.Offset.Offset);
            }

            return dateTime;
        }

        private DateTime? ConvertTimezone(DateTime? input, Timezone oldTimezone)
        {
            if (input is null)
            {
                return null;
            }

            DateTime dateTime = Convert.ToDateTime(input);

            return ConvertTimezone(dateTime, oldTimezone);
        }

        public Timezone GetTimezone(string input)
        {
            foreach (Timezone timezone in SupportedTimezones)
            {
                if (timezone.ToString() == input)
                    return timezone;
            }

            throw new TimezoneNotSupportedException();
        }

        private bool IsValidDate(DateTime dateTime)
        {
            if (dateTime.Year == 1)
                return false;
            return true;
        }
    }

    public class TimezoneNotSupportedException : Exception
    {
        public TimezoneNotSupportedException() {}
        public TimezoneNotSupportedException(string message) : base(message) { }

        public TimezoneNotSupportedException(string message, Exception innerException) : base(message, innerException) {}
    }
}