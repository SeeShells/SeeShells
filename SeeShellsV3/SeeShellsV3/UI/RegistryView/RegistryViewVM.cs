using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

using Unity;
using SeeShellsV3.Data;
using SeeShellsV3.Repositories;

namespace SeeShellsV3.UI
{
    public class RegistryViewVM : ViewModel, IRegistryViewVM
    {
        [Dependency]
        public IShellItemCollection ShellItems { get; set; }

        [Dependency]
        public IUserCollection Users { get; set; }

        [Dependency]
        public ISelected Selected { get; set; }
    }
}
