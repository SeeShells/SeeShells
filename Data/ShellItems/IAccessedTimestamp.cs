using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeeShellsV3.Data
{
    /// <summary>
    /// Used to identify shell items with a last accessed timestamp
    /// </summary>
    public interface IAccessedTimestamp : IShellItem
    {
        DateTime AccessedDate { get; }
    }
}
