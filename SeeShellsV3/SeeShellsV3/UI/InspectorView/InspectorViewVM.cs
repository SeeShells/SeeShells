using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Unity;
using SeeShellsV3.Repositories;

namespace SeeShellsV3.UI
{
    public class InspectorViewVM : ViewModel, IInspectorViewVM
    {
        [Dependency]
        public ISelected Selected { get; set; }
    }
}
