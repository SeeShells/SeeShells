using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel;
using System.Windows.Data;
using System.Text;
using System.Threading.Tasks;

using Unity;

using SeeShellsV3.Repositories;
using SeeShellsV3.Services;

namespace SeeShellsV3.UI
{
    public class ShellItemTableViewVM : ViewModel, IShellItemTableViewVM
    {
        [Dependency]
        public ISelected Selected { get; set; }

        [Dependency]
        public IShellItemCollection ShellItems { get; set; }
    }
}
