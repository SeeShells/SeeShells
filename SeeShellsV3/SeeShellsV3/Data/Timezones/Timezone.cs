using System;

namespace SeeShellsV3.Data
{
    public class Timezone : ITimezone
    {
        public string Name { get; init; }
        public UtcOffset Offset { get; init; }

        public Timezone(string name, double offset)
        {
            Name = name;
            Offset = new UtcOffset(offset);
        }

        public override string ToString()
        {
            return Name;
        }
    }
}