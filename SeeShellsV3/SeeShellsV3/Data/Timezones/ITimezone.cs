using System;

namespace SeeShellsV3.Data
{
    public interface ITimezone
    {
        /// <summary>
        /// The name of the timezone in standard format.
        /// </summary>
        /// <example>
        /// Eastern time would be formatted as "Eastern Standard Time".
        /// </example>
        string Name { get; init; }

        UtcOffset Offset { get; init; }

        string ToString();
    }
}
