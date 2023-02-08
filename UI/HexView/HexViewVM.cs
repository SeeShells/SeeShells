using SeeShellsV3.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Unity;

namespace SeeShellsV3.UI
{
    public class HexViewVM : IHexViewVM
    {
        [Dependency]
        public ISelected Selected { get; set; }
    }
}
