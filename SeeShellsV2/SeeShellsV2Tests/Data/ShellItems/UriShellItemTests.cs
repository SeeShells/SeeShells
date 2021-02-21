﻿using Microsoft.VisualStudio.TestTools.UnitTesting;
using SeeShellsV2.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeeShellsV2.Data.Tests
{
    [TestClass()]
    public class UriShellItemTests
    {
        [TestMethod()]
        public void UriShellItemTest()
        {
            UriShellItem item = new UriShellItem()
            {
                Type = 0x00,
                TypeName = "TestType",
                SubtypeName = "123",
                Description = "Test",
                Size = 10,
                Uri = "uri",
                FTPHostname = "192.168.1.1"
            };

            Assert.IsTrue(item.Fields.Count == 7);
            Assert.IsTrue(item.RegistryKey == null);

            Assert.IsTrue(item.Fields.ContainsKey("Type"));
            Assert.IsTrue(item.Fields.ContainsKey("TypeName"));
            Assert.IsTrue(item.Fields.ContainsKey("SubtypeName"));
            Assert.IsTrue(item.Fields.ContainsKey("Description"));
            Assert.IsTrue(item.Fields.ContainsKey("Size"));
            Assert.IsTrue(item.Fields.ContainsKey("Uri"));
            Assert.IsTrue(item.Fields.ContainsKey("FTPHostname"));

            Assert.IsTrue(item.Fields["Type"] as byte? == item.Type);
            Assert.IsTrue(item.Fields["TypeName"] as string == item.TypeName);
            Assert.IsTrue(item.Fields["SubtypeName"] as string == item.SubtypeName);
            Assert.IsTrue(item.Fields["Description"] as string == item.Description);
            Assert.IsTrue(item.Fields["Size"] as ushort? == item.Size);
            Assert.IsTrue(item.Fields["Uri"] as string == item.Uri);
            Assert.IsTrue(item.Fields["FTPHostname"] as string == item.FTPHostname);

            Assert.IsTrue(item.Type == 0x00);
            Assert.IsTrue(item.TypeName == "TestType");
            Assert.IsTrue(item.SubtypeName == "123");
            Assert.IsTrue(item.Description == "Test");
            Assert.IsTrue(item.Size == 10);
            Assert.IsTrue(item.Uri == "uri");
            Assert.IsTrue(item.FTPHostname == "192.168.1.1");
        }

        [TestMethod()]
        public void UriShellItemTest1()
        {
            byte[] buf = new byte[] {
                0x62, 0x00, 0x61, 0x03, 0x58, 0x00, 0x03, 0x27,
                0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x75, 0xA1,
                0x4A, 0xDE, 0x1C, 0x71, 0xD2, 0x01, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x15, 0x00,
                0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x73, 0x6F,
                0x6E, 0x69, 0x63, 0x66, 0x61, 0x6E, 0x31, 0x2E,
                0x74, 0x6B, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x00,
                0x00, 0x00, 0x61, 0x38, 0x38, 0x34, 0x39, 0x34,
                0x36, 0x36, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x66, 0x74,
                0x70, 0x00, 0x00, 0x00
            };

            UriShellItem item = new UriShellItem(buf);

            Assert.IsTrue(item.Fields.Count == 10);
            Assert.IsTrue(item.RegistryKey == null);

            Assert.IsTrue(item.Fields.ContainsKey("Type"));
            Assert.IsTrue(item.Fields.ContainsKey("TypeName"));
            Assert.IsTrue(item.Fields.ContainsKey("Description"));
            Assert.IsTrue(item.Fields.ContainsKey("Size"));
            Assert.IsTrue(item.Fields.ContainsKey("UriFlags"));
            Assert.IsTrue(item.Fields.ContainsKey("Uri"));
            Assert.IsTrue(item.Fields.ContainsKey("ConnectionDate"));
            Assert.IsTrue(item.Fields.ContainsKey("FTPHostname"));
            Assert.IsTrue(item.Fields.ContainsKey("FTPUsername"));
            Assert.IsTrue(item.Fields.ContainsKey("FTPPassword"));

            Assert.IsTrue(item.Fields["Type"] as byte? == item.Type);
            Assert.IsTrue(item.Fields["TypeName"] as string == item.TypeName);
            Assert.IsTrue(item.Fields["Description"] as string == item.Description);
            Assert.IsTrue(item.Fields["Size"] as ushort? == item.Size);
            Assert.IsTrue((UriShellItem.UriFlagBits)item.Fields["UriFlags"] == item.UriFlags);
            Assert.IsTrue(item.Fields["Uri"] as string == item.Uri);
            Assert.IsTrue(item.Fields["ConnectionDate"] as DateTime? == item.ConnectionDate);
            Assert.IsTrue(item.Fields["FTPHostname"] as string == item.FTPHostname);
            Assert.IsTrue(item.Fields["FTPUsername"] as string == item.FTPUsername);
            Assert.IsTrue(item.Fields["FTPPassword"] as string == item.FTPPassword);

            Assert.IsTrue(item.Type == 0x61);
            Assert.IsTrue(item.TypeName == "URI");
            Assert.IsTrue(item.Description == "sonicfan1.tk");
            Assert.IsTrue(item.Size == 0x62);
            Assert.IsTrue(item.UriFlags == (UriShellItem.UriFlagBits)0x03);
            Assert.IsTrue(item.Uri == "ftp");
            Assert.IsTrue(item.ConnectionDate == new DateTime(636202939949621621, DateTimeKind.Utc).ToLocalTime());
            Assert.IsTrue(item.FTPHostname == "sonicfan1.tk");
            Assert.IsTrue(item.FTPUsername == "a8849466");
            Assert.IsTrue(item.FTPPassword == string.Empty);
        }

        [TestMethod()]
        public void UriShellItemTest2()
        {
            byte[] buf = new byte[] {
                0x52, 0x00, 0x61, 0x03, 0x48, 0x00, 0x03, 0x01,
                0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0xDD, 0xCA,
                0x82, 0x1D, 0xE9, 0x8F, 0xD2, 0x01, 0xFF, 0xFF,
                0xFF, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x15, 0x00,
                0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x31, 0x39,
                0x32, 0x2E, 0x31, 0x36, 0x38, 0x2E, 0x31, 0x33,
                0x32, 0x2E, 0x31, 0x39, 0x32, 0x00, 0x04, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x66, 0x74,
                0x70, 0x00, 0x00, 0x00
            };

            UriShellItem item = new UriShellItem(buf);

            Assert.IsTrue(item.Fields.Count == 10);
            Assert.IsTrue(item.RegistryKey == null);

            Assert.IsTrue(item.Fields.ContainsKey("Type"));
            Assert.IsTrue(item.Fields.ContainsKey("TypeName"));
            Assert.IsTrue(item.Fields.ContainsKey("Description"));
            Assert.IsTrue(item.Fields.ContainsKey("Size"));
            Assert.IsTrue(item.Fields.ContainsKey("UriFlags"));
            Assert.IsTrue(item.Fields.ContainsKey("Uri"));
            Assert.IsTrue(item.Fields.ContainsKey("ConnectionDate"));
            Assert.IsTrue(item.Fields.ContainsKey("FTPHostname"));
            Assert.IsTrue(item.Fields.ContainsKey("FTPUsername"));
            Assert.IsTrue(item.Fields.ContainsKey("FTPPassword"));

            Assert.IsTrue(item.Fields["Type"] as byte? == item.Type);
            Assert.IsTrue(item.Fields["TypeName"] as string == item.TypeName);
            Assert.IsTrue(item.Fields["Description"] as string == item.Description);
            Assert.IsTrue(item.Fields["Size"] as ushort? == item.Size);
            Assert.IsTrue((UriShellItem.UriFlagBits)item.Fields["UriFlags"] == item.UriFlags);
            Assert.IsTrue(item.Fields["Uri"] as string == item.Uri);
            Assert.IsTrue(item.Fields["ConnectionDate"] as DateTime? == item.ConnectionDate);
            Assert.IsTrue(item.Fields["FTPHostname"] as string == item.FTPHostname);
            Assert.IsTrue(item.Fields["FTPUsername"] as string == item.FTPUsername);
            Assert.IsTrue(item.Fields["FTPPassword"] as string == item.FTPPassword);

            Assert.IsTrue(item.Type == 0x61);
            Assert.IsTrue(item.TypeName == "URI");
            Assert.IsTrue(item.Description == "192.168.132.192");
            Assert.IsTrue(item.Size == 0x52);
            Assert.IsTrue(item.UriFlags == (UriShellItem.UriFlagBits)0x03);
            Assert.IsTrue(item.Uri == "ftp");
            Assert.IsTrue(item.ConnectionDate == new DateTime(636236802532428509, DateTimeKind.Utc).ToLocalTime());
            Assert.IsTrue(item.FTPHostname == "192.168.132.192");
            Assert.IsTrue(item.FTPUsername == string.Empty);
            Assert.IsTrue(item.FTPPassword == string.Empty);
        }

        [TestMethod()]
        public void UriShellItemTest3()
        {
            byte[] buf = new byte[] {
                0x62, 0x00, 0x61, 0x03, 0x58, 0x00, 0x03, 0x27,
                0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x75, 0xA1,
                0x4A, 0xDE, 0x1C, 0x71, 0xD2, 0x01, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x15, 0x00,
                0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x73, 0x6F,
                0x6E, 0x69, 0x63, 0x66, 0x61, 0x6E, 0x31, 0x2E,
                0x74, 0x6B, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x00,
                0x00, 0x00, 0x61, 0x38, 0x38, 0x34, 0x39, 0x34,
                0x36, 0x36, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x66, 0x74,
                0x70, 0x00, 0x00, 0x00
            };

            IShellItem item = ShellItem.FromByteArray(buf);
            Assert.IsTrue(item is UriShellItem);
        }
    }
}