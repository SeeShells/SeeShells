using System.ComponentModel;
using SeeShellsV3.Data;

namespace SeeShellsV3.Repositories
{
    /// <summary>
    /// A collection that holds ShellEvents to be used in specific PDF modules.
    /// </summary>
    public interface IReportEventCollection
    {
        /// <summary>
        /// Collection that stores the selected ShellEvents.
        /// </summary>
        IShellEventCollection SelectedEvents { get; }

        /// <summary>
        /// Boolean that signifies whether the collection is empty or not.
        /// </summary>
        bool HasEvents { get; set; }

        /// <summary>
        /// Adds an event to the collection.
        /// </summary>
        /// <param name="shellEvent">Event to be added to the collection.</param>
        /// <returns>Boolean to signify whether the operation was successful.</returns>
        bool AddEvent(IShellEvent shellEvent);

        /// <summary>
        /// Removes an event to the collection.
        /// </summary>
        /// <param name="shellEvent">Event to be removed from the collection.</param>
        /// <returns>Boolean to signify whether the operation was successful.</returns>
        bool RemoveEvent(IShellEvent shellEvent);
    }
}