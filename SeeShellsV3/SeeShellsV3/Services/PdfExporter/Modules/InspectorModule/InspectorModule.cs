using System;
using System.Windows;
using System.Windows.Markup;
using SeeShellsV3.Repositories;
using SeeShellsV3.UI;
using Unity;

namespace SeeShellsV3.Services
{
    public class InspectorModule: IPdfModule
    {
        public string Name => "Inspector";
		[Dependency] public IReportEventCollection ReportEvents { get; set; }
        private FrameworkElement Inspector { get; set; }
        public UIElement Render()
        {
            return Inspector as UIElement;
        }

        public FrameworkElement View()
        {
            string view = @"
            <Grid>
                <local:InspectorView x:Name=""Inspector""/>
			</Grid>";

            ParserContext context = new ParserContext();
            context.XmlnsDictionary.Add("", "http://schemas.microsoft.com/winfx/2006/xaml/presentation");
            context.XmlnsDictionary.Add("x", "http://schemas.microsoft.com/winfx/2006/xaml");
            context.XmlnsDictionary.Add("d", "http://schemas.microsoft.com/expression/blend/2008");
            context.XmlnsDictionary.Add("mc", "http://schemas.openxmlformats.org/markup-compatibility/2006");
            context.XmlnsDictionary.Add("oxy", "http://oxyplot.org/wpf");
            context.XmlnsDictionary.Add("mah", "http://metro.mahapps.com/winfx/xaml/controls");

            InspectorView inspector = new InspectorView();
            Type type = inspector.GetType();
            context.XamlTypeMapper = new XamlTypeMapper(new string[0]);
            context.XamlTypeMapper.AddMappingProcessingInstruction("local", type.Namespace, type.Assembly.FullName);
            context.XmlnsDictionary.Add("local", "local");

            FrameworkElement e = XamlReader.Parse(view, context) as FrameworkElement;

            e.DataContext = this;

            var insp = e.FindName("Inspector") as InspectorView;

            Inspector = insp;

            return e;
        }

        public IPdfModule Clone()
        {
            return MemberwiseClone() as IPdfModule;
        }
    }
}