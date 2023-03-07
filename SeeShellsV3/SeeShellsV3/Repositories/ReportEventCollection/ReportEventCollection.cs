using System;
using System.ComponentModel;
using SeeShellsV3.Data;

namespace SeeShellsV3.Repositories
{
    public class ReportEventCollection: IReportEventCollection
    {
        public IShellEventCollection SelectedEvents { get; set; }
        public bool HasEvents { get; set; }
        public bool AddEvent(IShellEvent shellEvent)
        {
            try
            {
                SelectedEvents.Add(shellEvent);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }

            return true;
        }

        public bool RemoveEvent(IShellEvent shellEvent)
        {
            try
            {
                return SelectedEvents.Remove(shellEvent);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
        }
    }
}