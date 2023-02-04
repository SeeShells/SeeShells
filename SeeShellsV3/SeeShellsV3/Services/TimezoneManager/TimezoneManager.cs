using System;
using System.Collections.ObjectModel;
using System.ComponentModel.Design;
using System.Diagnostics;
using System.Windows.Controls;
using SeeShellsV3.Data;
using SeeShellsV3.Events;
using SeeShellsV3.Repositories;
using SeeShellsV3.UI;
using Unity;

namespace SeeShellsV3.Services
{
    public class TimezoneManager: ITimezoneManager
    {
        public Timezone CurrentTimezone { get; set; } = new Timezone("Coordinated Universal Time", "UTC");

        public Collection<Timezone> SupportedTimezones { get; init; } = new Collection<Timezone>();

        private IShellEventCollection ShellEvents { get; set; }
        private IShellItemCollection ShellItems { get; set; }


        public TimezoneManager(
            [Dependency] IShellEventCollection shellEvents,
            [Dependency] IShellItemCollection shellItems
        )
        {
            ShellItems = shellItems;
            ShellEvents = shellEvents;

            // Populates SupportedTimezones with all the timezones currently available in SeeShells
            SupportedTimezones.Add(new Timezone("Coordinated Universal Time", "UTC"));
            SupportedTimezones.Add(new Timezone("Eastern Standard Time", "EST"));
            SupportedTimezones.Add(new Timezone("Central Standard Time", "CST"));
            SupportedTimezones.Add(new Timezone("Mountain Standard Time", "MST"));
            SupportedTimezones.Add(new Timezone("Pacific Standard Time", "PST"));
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
            // TODO: Implement all types of timestamps that only certain ShellItems types have, such as ConnectedTimestamp
            foreach (var shellItem in ShellItems)
            {
                shellItem.SlotModifiedDate = ConvertTimezone(shellItem.SlotModifiedDate, oldTimezone);
                shellItem.LastRegistryWriteDate = ConvertTimezone(shellItem.LastRegistryWriteDate, oldTimezone);

                if (shellItem is CompressedFolderShellItem intermediate)
                {
                    intermediate.ModifiedDate = ConvertTimezone(intermediate.ModifiedDate, oldTimezone);
                }
            }

            // Loop through all ShellEvents and update their timestamps
            foreach (var shellEvent in ShellEvents)
            {
                shellEvent.TimeStamp = ConvertTimezone(shellEvent.TimeStamp, oldTimezone);
            }

            ShellEvents.FilteredView.Refresh();
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
            if (CurrentTimezone.Identifier == "UTC")
            {
                return TimeZoneInfo.ConvertTimeToUtc(dateTime, oldTimezone.Information);
            }
            if (dateTime.Kind == DateTimeKind.Utc)
            {
                return TimeZoneInfo.ConvertTimeFromUtc(dateTime, CurrentTimezone.Information);
            }
            if (dateTime.Kind == DateTimeKind.Unspecified)
            {
                return TimeZoneInfo.ConvertTime(dateTime, oldTimezone.Information, CurrentTimezone.Information);
            }
            if (dateTime.Kind == DateTimeKind.Local)
            {
                return TimeZoneInfo.ConvertTime(dateTime, TimeZoneInfo.Local, CurrentTimezone.Information);
            }

            throw new TimezoneNotSupportedException();
        }

        private DateTime? ConvertTimezone(DateTime? input, Timezone oldTimezone)
        {
            if (input is null)
            {
                return null;
            }

            DateTime dateTime = Convert.ToDateTime(input);

            if (CurrentTimezone.Identifier == "UTC")
            {
                return TimeZoneInfo.ConvertTimeToUtc(dateTime, oldTimezone.Information);
            }
            if (dateTime.Kind == DateTimeKind.Utc)
            {
                return TimeZoneInfo.ConvertTimeFromUtc(dateTime, CurrentTimezone.Information);
            }
            if (dateTime.Kind == DateTimeKind.Unspecified)
            {
                return TimeZoneInfo.ConvertTime(dateTime, oldTimezone.Information, CurrentTimezone.Information);
            }
            if (dateTime.Kind == DateTimeKind.Local)
            {
                return TimeZoneInfo.ConvertTime(dateTime, TimeZoneInfo.Local, CurrentTimezone.Information);
            }

            throw new TimezoneNotSupportedException();
        }

        public Timezone GetTimezone(string input)
        {
            foreach (var timezone in SupportedTimezones)
            {
                if (timezone.Identify(input))
                    return timezone;
            }

            throw new TimezoneNotSupportedException();
        }
    }

    public class TimezoneNotSupportedException : Exception
    {
        public TimezoneNotSupportedException() {}
        public TimezoneNotSupportedException(string message) : base(message) { }

        public TimezoneNotSupportedException(string message, Exception innerException) : base(message, innerException) {}
    }
}