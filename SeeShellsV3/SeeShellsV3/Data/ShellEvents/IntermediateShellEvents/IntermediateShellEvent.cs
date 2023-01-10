using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeeShellsV3.Data
{
    public class IntermediateShellEvent : ShellEvent, IIntermediateShellEvent
    {
        public bool Consumed { get; set; }
    }
}
