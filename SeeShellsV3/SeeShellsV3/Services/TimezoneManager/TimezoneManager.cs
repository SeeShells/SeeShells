using System;
using System.Collections.ObjectModel;
using SeeShellsV3.Data;
using SeeShellsV3.Events;
using SeeShellsV3.Repositories;
using Unity;

namespace SeeShellsV3.Services
{
    public class TimezoneManager: ITimezoneManager
    {
        public Timezone CurrentTimezone { get; set; } = new Timezone("Coordinated Universal Time", "UTC");

        public Collection<Timezone> SupportedTimezones { get; init; } = new Collection<Timezone>();
        public event EventHandler<TimezoneChangeEventArgs> TimezoneChange;

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

            TimezoneChange += TimezoneChangeHandler;
        }

        public void Invoke(object sender, TimezoneChangeEventArgs e)
        {
            TimezoneChange?.Invoke(sender, e);
        }

        /// <summary>
        /// Handles the changing of timestamps throughout the application when <see cref="TimezoneChange"/> is invoked.
        /// </summary>
        private void TimezoneChangeHandler(object sender, TimezoneChangeEventArgs e)
        {
            // Store the timezone that we are switching from for conversion purposes
            Timezone oldTimezone = CurrentTimezone;
            
            // Update CurrentTimezone to the new timezone
            CurrentTimezone = GetTimezone(e.Name);

            // Loop through all ShellItems and update their timestamps
            // TODO: Implement all types of timestamps that only certain ShellItems types have, such as ConnectedTimestamp
            foreach (var shellItem in ShellItems)
            {
                // TODO: Fix this block of code
                /*if (shellItem.SlotModifiedDate is not null)
                {
                    DateTime slotModifiedDateConverted = Convert.ToDateTime(shellItem.SlotModifiedDate);
                    shellItem.SlotModifiedDate =
                        TimeZoneInfo.ConvertTime(slotModifiedDateConverted, oldTimezone.Information, CurrentTimezone.Information);

                    shellItem.SlotModifiedDate = slotModifiedDateConverted as DateTime?;
                }*/

                shellItem.LastRegistryWriteDate = TimeZoneInfo.ConvertTime(shellItem.LastRegistryWriteDate,
                    oldTimezone.Information, CurrentTimezone.Information);
            }

            // Loop through all ShellEvents and update their timestamps
            foreach (var shellEvent in ShellEvents)
            {
                shellEvent.TimeStamp = TimeZoneInfo.ConvertTime(shellEvent.TimeStamp, oldTimezone.Information,
                    CurrentTimezone.Information);
            }
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