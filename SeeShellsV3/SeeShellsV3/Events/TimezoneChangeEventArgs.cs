using System;

namespace SeeShellsV3.Events
{
    public class TimezoneChangeEventArgs : EventArgs
    {
        public TimezoneChangeEventArgs(string oldName, string newName, string newCode)
        {
            OldName = oldName;
            OldTimezone = TimeZoneInfo.FindSystemTimeZoneById(oldName == "Coordinated Universal Time" ? "UTC" : oldName);


            NewName = newName;
            NewCode = newCode;
            NewTimezone = TimeZoneInfo.FindSystemTimeZoneById(newName == "Coordinated Universal Time" ? "UTC" : newName);
        }

        /// <summary>
        /// The name of the old timezone in standard format.
        /// </summary>
        /// <example>
        /// Eastern time would be formatted as "Eastern Standard Time".
        /// </example>
        public string OldName { get; init; }

        /// <summary>
        /// A TimeZoneInfo object that represents the old timezone
        /// </summary>
        public TimeZoneInfo OldTimezone { get; init; }



        /// <summary>
        /// The name of the new timezone in standard format.
        /// </summary>
        /// <example>
        /// Eastern time would be formatted as "Eastern Standard Time".
        /// </example>
        public string NewName { get; init; }

        /// <summary>
        /// Abbreviation of the new timezone, typically in three letter format.
        /// </summary>
        /// <example>
        /// Eastern time would be formatted as "EST".
        /// </example>
        public string NewCode { get; init; }

        /// <summary>
        /// A TimeZoneInfo object that represents the new timezone.
        /// </summary>
        public TimeZoneInfo NewTimezone { get; init; }

    }
}