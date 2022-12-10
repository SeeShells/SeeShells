using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using SeeShellsV3.Data;

namespace SeeShellsV3.Repositories
{
    /// <summary>
    /// A collection of Place objects. Services and ViewModels can get a reference to this collection
    /// by declaring an appropriate constructor or property dependency.
    /// </summary>
    public interface IPlaceCollection : IDataRepository<Place>
    {
    }
}
