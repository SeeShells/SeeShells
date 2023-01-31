using System;
using System.Collections.ObjectModel;
using SeeShellsV3.Data;
using SeeShellsV3.Events;

namespace SeeShellsV3.Services
{
    /// <summary>
    /// An object that manages the changing of the timezones within the application.
    /// </summary>
    public interface ITimezoneManager
    {
        /// <summary>
        /// The currently selected timezone.
        /// </summary>
        public Timezone CurrentTimezone { get; set; }

        /// <summary>
        /// A list of timezones that are currently supported.
        /// </summary>
        public Collection<Timezone> SupportedTimezones { get; init; }

        /// <summary>
        /// An event that triggers when the timezone is updated.
        /// </summary>
        public event EventHandler<TimezoneChangeEventArgs> TimezoneChange;

        /// <summary>
        /// Invokes TimezoneChange to notify all subscribers that the Timezone has changed.
        /// </summary>
        public void Invoke(object sender, TimezoneChangeEventArgs e);

        public Timezone GetTimezone(string input);
    }
}