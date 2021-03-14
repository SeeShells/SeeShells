﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeeShellsV2.Data
{
    public interface IShellEventGenerator
    {
        /// <summary>
        /// Check if this ShellEventGenerator can generate any additional events
        /// from the given <see cref="IShellEvent"/> sequence
        /// </summary>
        /// <param name="sequence">an input sequence of events</param>
        /// <returns>true if this generator can create new events from the input sequence</returns>
        bool CanGenerate(IEnumerable<IShellEvent> sequence);

        /// <summary>
        /// Generate additional events from the given <see cref="IShellEvent"/> sequence
        /// </summary>
        /// <param name="sequence">an input sequence of events</param>
        /// <returns>an enumeration of new events</returns>
        IEnumerable<IShellEvent> Generate(IEnumerable<IShellEvent> sequence);
    }
}
