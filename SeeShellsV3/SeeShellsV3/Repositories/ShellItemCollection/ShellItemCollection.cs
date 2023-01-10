using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

using SeeShellsV3.Data;
using SeeShellsV3.Utilities;

namespace SeeShellsV3.Repositories
{
    public class ShellItemCollection : ObservableSortedList<IShellItem>, IShellItemCollection
    { }
}
