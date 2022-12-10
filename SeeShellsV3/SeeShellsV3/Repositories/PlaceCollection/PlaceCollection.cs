using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using SeeShellsV3.Data;
using SeeShellsV3.Utilities;

namespace SeeShellsV3.Repositories
{
    public class PlaceCollection : ObservableSortedList<Place>, IPlaceCollection
    { }
}
