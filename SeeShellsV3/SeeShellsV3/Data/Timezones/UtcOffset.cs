using System;

namespace SeeShellsV3.Data;

public class UtcOffset: IUtcOffset
{
    public double Numeric { get; init; }
    public TimeSpan Offset { get; init; }
    public TimeSpan Inverse { get; init; }

    public UtcOffset(double offset)
    {
        Numeric = offset;
        Offset = TimeSpan.FromHours(Numeric);
        Inverse = TimeSpan.FromHours(Numeric * (-1d));
    }
}