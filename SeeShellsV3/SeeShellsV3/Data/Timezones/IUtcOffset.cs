using System;

namespace SeeShellsV3.Data;

public interface IUtcOffset
{
    /// <summary>
    /// The UTC offset represented by a double.
    /// <example>
    /// A (UTC+2:00) timezone would be represented as 
    /// </example>
    /// </summary>
    double Numeric { get; init; }

    /// <summary>
    /// The UTC offset represented as a difference in time.
    /// </summary>
    TimeSpan Offset { get; init; }

    /// <summary>
    /// The inverse of the UTC offset. Used for easily reverting back to UTC.
    /// <example>
    /// Eastern Standard Time has the offset (UTC-5:00). Thus, the inverse should (UTC+5:00). Then adding the inverse
    /// to any EST timezone will result in a offset of (UTC+0:00), meaning it has been converted to UTC.
    /// </example>
    /// </summary>
    TimeSpan Inverse { get; init; }
}