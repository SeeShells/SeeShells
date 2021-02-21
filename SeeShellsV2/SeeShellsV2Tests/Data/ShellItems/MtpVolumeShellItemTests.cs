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
    public class MtpVolumeShellItemTests
    {
        [TestMethod()]
        public void MtpVolumeShellItemTest()
        {
            MtpVolumeShellItem item = new MtpVolumeShellItem()
            {
                Type = 0x00,
                TypeName = "TestType",
                Description = "Test",
                Size = 10,
                StorageName = "Internal Storage",
                StorageId = "123ABC",
                FileSystemName = "ZXYW"
            };

            Assert.IsTrue(item.Fields.Count == 7);
            Assert.IsTrue(item.Fields.ContainsKey("Type"));
            Assert.IsTrue(item.Fields["Type"] as byte? == item.Type);
            Assert.IsTrue(item.Type == 0x00);
            Assert.IsTrue(item.Fields.ContainsKey("TypeName"));
            Assert.IsTrue(item.Fields["TypeName"] as string == item.TypeName);
            Assert.IsTrue(item.TypeName == "TestType");
            Assert.IsTrue(item.Fields.ContainsKey("Description"));
            Assert.IsTrue(item.Fields["Description"] as string == item.Description);
            Assert.IsTrue(item.Description == "Test");
            Assert.IsTrue(item.Fields.ContainsKey("Size"));
            Assert.IsTrue(item.Fields["Size"] as ushort? == item.Size);
            Assert.IsTrue(item.Size == 10);
            Assert.IsTrue(item.Fields.ContainsKey("StorageName"));
            Assert.IsTrue(item.Fields["StorageName"] as string == item.StorageName);
            Assert.IsTrue(item.StorageName == "Internal Storage");
            Assert.IsTrue(item.Fields.ContainsKey("StorageId"));
            Assert.IsTrue(item.Fields["StorageId"] as string == item.StorageId);
            Assert.IsTrue(item.StorageId == "123ABC");
            Assert.IsTrue(item.Fields.ContainsKey("FileSystemName"));
            Assert.IsTrue(item.Fields["FileSystemName"] as string == item.FileSystemName);
            Assert.IsTrue(item.FileSystemName == "ZXYW");
            Assert.IsTrue(item.RegistryKey == null);
        }

        [TestMethod()]
        public void MtpVolumeShellItemTest1()
        {
            byte[] buf = new byte[] {
                0xF2, 0x04, 0x00, 0x00, 0xEC, 0x04, 0x05, 0x20,
                0x31, 0x10, 0x03, 0x00, 0x00, 0x00, 0x02, 0x00,
                0x20, 0x00, 0x00, 0xE0, 0xDC, 0x1E, 0x07, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0xB8, 0x02, 0x00, 0x00, 0x11, 0x00,
                0x00, 0x00, 0x29, 0x00, 0x00, 0x00, 0x04, 0x00,
                0x00, 0x00, 0x05, 0x00, 0x00, 0x00, 0x49, 0x00,
                0x6E, 0x00, 0x74, 0x00, 0x65, 0x00, 0x72, 0x00,
                0x6E, 0x00, 0x61, 0x00, 0x6C, 0x00, 0x20, 0x00,
                0x53, 0x00, 0x74, 0x00, 0x6F, 0x00, 0x72, 0x00,
                0x61, 0x00, 0x67, 0x00, 0x65, 0x00, 0x00, 0x00,
                0x53, 0x00, 0x49, 0x00, 0x44, 0x00, 0x2D, 0x00,
                0x7B, 0x00, 0x31, 0x00, 0x30, 0x00, 0x30, 0x00,
                0x30, 0x00, 0x31, 0x00, 0x2C, 0x00, 0x49, 0x00,
                0x6E, 0x00, 0x74, 0x00, 0x65, 0x00, 0x72, 0x00,
                0x6E, 0x00, 0x61, 0x00, 0x6C, 0x00, 0x20, 0x00,
                0x53, 0x00, 0x74, 0x00, 0x6F, 0x00, 0x72, 0x00,
                0x61, 0x00, 0x67, 0x00, 0x65, 0x00, 0x2C, 0x00,
                0x33, 0x00, 0x30, 0x00, 0x35, 0x00, 0x38, 0x00,
                0x32, 0x00, 0x35, 0x00, 0x36, 0x00, 0x32, 0x00,
                0x38, 0x00, 0x31, 0x00, 0x36, 0x00, 0x7D, 0x00,
                0x00, 0x00, 0x44, 0x00, 0x43, 0x00, 0x46, 0x00,
                0x00, 0x00, 0x7B, 0x00, 0x45, 0x00, 0x46, 0x00,
                0x32, 0x00, 0x31, 0x00, 0x30, 0x00, 0x37, 0x00,
                0x44, 0x00, 0x35, 0x00, 0x2D, 0x00, 0x41, 0x00,
                0x35, 0x00, 0x32, 0x00, 0x41, 0x00, 0x2D, 0x00,
                0x34, 0x00, 0x32, 0x00, 0x34, 0x00, 0x33, 0x00,
                0x2D, 0x00, 0x41, 0x00, 0x32, 0x00, 0x36, 0x00,
                0x42, 0x00, 0x2D, 0x00, 0x36, 0x00, 0x32, 0x00,
                0x44, 0x00, 0x34, 0x00, 0x31, 0x00, 0x37, 0x00,
                0x36, 0x00, 0x44, 0x00, 0x37, 0x00, 0x36, 0x00,
                0x30, 0x00, 0x33, 0x00, 0x7D, 0x00, 0x00, 0x00,
                0x7B, 0x00, 0x34, 0x00, 0x41, 0x00, 0x44, 0x00,
                0x32, 0x00, 0x43, 0x00, 0x38, 0x00, 0x35, 0x00,
                0x45, 0x00, 0x2D, 0x00, 0x35, 0x00, 0x45, 0x00,
                0x32, 0x00, 0x44, 0x00, 0x2D, 0x00, 0x34, 0x00,
                0x35, 0x00, 0x45, 0x00, 0x35, 0x00, 0x2D, 0x00,
                0x38, 0x00, 0x38, 0x00, 0x36, 0x00, 0x34, 0x00,
                0x2D, 0x00, 0x34, 0x00, 0x46, 0x00, 0x32, 0x00,
                0x32, 0x00, 0x39, 0x00, 0x45, 0x00, 0x33, 0x00,
                0x43, 0x00, 0x36, 0x00, 0x43, 0x00, 0x46, 0x00,
                0x30, 0x00, 0x7D, 0x00, 0x00, 0x00, 0x7B, 0x00,
                0x39, 0x00, 0x32, 0x00, 0x36, 0x00, 0x31, 0x00,
                0x42, 0x00, 0x30, 0x00, 0x33, 0x00, 0x43, 0x00,
                0x2D, 0x00, 0x33, 0x00, 0x44, 0x00, 0x37, 0x00,
                0x38, 0x00, 0x2D, 0x00, 0x34, 0x00, 0x35, 0x00,
                0x31, 0x00, 0x39, 0x00, 0x2D, 0x00, 0x38, 0x00,
                0x35, 0x00, 0x45, 0x00, 0x33, 0x00, 0x2D, 0x00,
                0x30, 0x00, 0x32, 0x00, 0x43, 0x00, 0x35, 0x00,
                0x45, 0x00, 0x31, 0x00, 0x46, 0x00, 0x35, 0x00,
                0x30, 0x00, 0x42, 0x00, 0x42, 0x00, 0x39, 0x00,
                0x7D, 0x00, 0x00, 0x00, 0x7B, 0x00, 0x32, 0x00,
                0x38, 0x00, 0x44, 0x00, 0x38, 0x00, 0x44, 0x00,
                0x33, 0x00, 0x31, 0x00, 0x45, 0x00, 0x2D, 0x00,
                0x32, 0x00, 0x34, 0x00, 0x39, 0x00, 0x43, 0x00,
                0x2D, 0x00, 0x34, 0x00, 0x35, 0x00, 0x34, 0x00,
                0x45, 0x00, 0x2D, 0x00, 0x41, 0x00, 0x41, 0x00,
                0x42, 0x00, 0x43, 0x00, 0x2D, 0x00, 0x33, 0x00,
                0x34, 0x00, 0x38, 0x00, 0x38, 0x00, 0x33, 0x00,
                0x31, 0x00, 0x36, 0x00, 0x38, 0x00, 0x45, 0x00,
                0x36, 0x00, 0x33, 0x00, 0x34, 0x00, 0x7D, 0x00,
                0x00, 0x00, 0x7B, 0x00, 0x32, 0x00, 0x37, 0x00,
                0x45, 0x00, 0x32, 0x00, 0x45, 0x00, 0x33, 0x00,
                0x39, 0x00, 0x32, 0x00, 0x2D, 0x00, 0x41, 0x00,
                0x31, 0x00, 0x31, 0x00, 0x31, 0x00, 0x2D, 0x00,
                0x34, 0x00, 0x38, 0x00, 0x45, 0x00, 0x30, 0x00,
                0x2D, 0x00, 0x41, 0x00, 0x42, 0x00, 0x30, 0x00,
                0x43, 0x00, 0x2D, 0x00, 0x45, 0x00, 0x31, 0x00,
                0x37, 0x00, 0x37, 0x00, 0x30, 0x00, 0x35, 0x00,
                0x41, 0x00, 0x30, 0x00, 0x35, 0x00, 0x46, 0x00,
                0x38, 0x00, 0x35, 0x00, 0x7D, 0x00, 0x00, 0x00,
                0x0D, 0x00, 0x00, 0x00, 0x03, 0xD5, 0x15, 0x0C,
                0x17, 0xD0, 0xCE, 0x47, 0x90, 0x16, 0x7B, 0x3F,
                0x97, 0x87, 0x21, 0xCC, 0x0F, 0x00, 0x00, 0x00,
                0x7A, 0x05, 0xA3, 0x01, 0xD6, 0x74, 0x80, 0x4E,
                0xBE, 0xA7, 0xDC, 0x4C, 0x21, 0x2C, 0xE5, 0x0A,
                0x02, 0x00, 0x00, 0x00, 0x13, 0x00, 0x00, 0x00,
                0x03, 0x00, 0x00, 0x00, 0x7A, 0x05, 0xA3, 0x01,
                0xD6, 0x74, 0x80, 0x4E, 0xBE, 0xA7, 0xDC, 0x4C,
                0x21, 0x2C, 0xE5, 0x0A, 0x03, 0x00, 0x00, 0x00,
                0x1F, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00,
                0x44, 0x00, 0x43, 0x00, 0x46, 0x00, 0x00, 0x00,
                0x7A, 0x05, 0xA3, 0x01, 0xD6, 0x74, 0x80, 0x4E,
                0xBE, 0xA7, 0xDC, 0x4C, 0x21, 0x2C, 0xE5, 0x0A,
                0x0B, 0x00, 0x00, 0x00, 0x13, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x7A, 0x05, 0xA3, 0x01,
                0xD6, 0x74, 0x80, 0x4E, 0xBE, 0xA7, 0xDC, 0x4C,
                0x21, 0x2C, 0xE5, 0x0A, 0x04, 0x00, 0x00, 0x00,
                0x15, 0x00, 0x00, 0x00, 0x00, 0xE0, 0xDC, 0x1E,
                0x07, 0x00, 0x00, 0x00, 0x7A, 0x05, 0xA3, 0x01,
                0xD6, 0x74, 0x80, 0x4E, 0xBE, 0xA7, 0xDC, 0x4C,
                0x21, 0x2C, 0xE5, 0x0A, 0x05, 0x00, 0x00, 0x00,
                0x15, 0x00, 0x00, 0x00, 0x00, 0xA0, 0x71, 0x61,
                0x05, 0x00, 0x00, 0x00, 0x7A, 0x05, 0xA3, 0x01,
                0xD6, 0x74, 0x80, 0x4E, 0xBE, 0xA7, 0xDC, 0x4C,
                0x21, 0x2C, 0xE5, 0x0A, 0x06, 0x00, 0x00, 0x00,
                0x15, 0x00, 0x00, 0x00, 0x2E, 0x3C, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x7A, 0x05, 0xA3, 0x01,
                0xD6, 0x74, 0x80, 0x4E, 0xBE, 0xA7, 0xDC, 0x4C,
                0x21, 0x2C, 0xE5, 0x0A, 0x07, 0x00, 0x00, 0x00,
                0x1F, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00,
                0x49, 0x00, 0x6E, 0x00, 0x74, 0x00, 0x65, 0x00,
                0x72, 0x00, 0x6E, 0x00, 0x61, 0x00, 0x6C, 0x00,
                0x20, 0x00, 0x53, 0x00, 0x74, 0x00, 0x6F, 0x00,
                0x72, 0x00, 0x61, 0x00, 0x67, 0x00, 0x65, 0x00,
                0x00, 0x00, 0x0D, 0x49, 0x6B, 0xEF, 0xD8, 0x5C,
                0x7A, 0x43, 0xAF, 0xFC, 0xDA, 0x8B, 0x60, 0xEE,
                0x4A, 0x3C, 0x05, 0x00, 0x00, 0x00, 0x1F, 0x00,
                0x00, 0x00, 0x52, 0x00, 0x00, 0x00, 0x53, 0x00,
                0x49, 0x00, 0x44, 0x00, 0x2D, 0x00, 0x7B, 0x00,
                0x31, 0x00, 0x30, 0x00, 0x30, 0x00, 0x30, 0x00,
                0x31, 0x00, 0x2C, 0x00, 0x49, 0x00, 0x6E, 0x00,
                0x74, 0x00, 0x65, 0x00, 0x72, 0x00, 0x6E, 0x00,
                0x61, 0x00, 0x6C, 0x00, 0x20, 0x00, 0x53, 0x00,
                0x74, 0x00, 0x6F, 0x00, 0x72, 0x00, 0x61, 0x00,
                0x67, 0x00, 0x65, 0x00, 0x2C, 0x00, 0x33, 0x00,
                0x30, 0x00, 0x35, 0x00, 0x38, 0x00, 0x32, 0x00,
                0x35, 0x00, 0x36, 0x00, 0x32, 0x00, 0x38, 0x00,
                0x31, 0x00, 0x36, 0x00, 0x7D, 0x00, 0x00, 0x00,
                0x0D, 0x49, 0x6B, 0xEF, 0xD8, 0x5C, 0x7A, 0x43,
                0xAF, 0xFC, 0xDA, 0x8B, 0x60, 0xEE, 0x4A, 0x3C,
                0x04, 0x00, 0x00, 0x00, 0x1F, 0x00, 0x00, 0x00,
                0x22, 0x00, 0x00, 0x00, 0x49, 0x00, 0x6E, 0x00,
                0x74, 0x00, 0x65, 0x00, 0x72, 0x00, 0x6E, 0x00,
                0x61, 0x00, 0x6C, 0x00, 0x20, 0x00, 0x53, 0x00,
                0x74, 0x00, 0x6F, 0x00, 0x72, 0x00, 0x61, 0x00,
                0x67, 0x00, 0x65, 0x00, 0x00, 0x00, 0x7A, 0x05,
                0xA3, 0x01, 0xD6, 0x74, 0x80, 0x4E, 0xBE, 0xA7,
                0xDC, 0x4C, 0x21, 0x2C, 0xE5, 0x0A, 0x08, 0x00,
                0x00, 0x00, 0x1F, 0x00, 0x00, 0x00, 0x22, 0x00,
                0x00, 0x00, 0x49, 0x00, 0x6E, 0x00, 0x74, 0x00,
                0x65, 0x00, 0x72, 0x00, 0x6E, 0x00, 0x61, 0x00,
                0x6C, 0x00, 0x20, 0x00, 0x53, 0x00, 0x74, 0x00,
                0x6F, 0x00, 0x72, 0x00, 0x61, 0x00, 0x67, 0x00,
                0x65, 0x00, 0x00, 0x00, 0x0D, 0x49, 0x6B, 0xEF,
                0xD8, 0x5C, 0x7A, 0x43, 0xAF, 0xFC, 0xDA, 0x8B,
                0x60, 0xEE, 0x4A, 0x3C, 0x06, 0x00, 0x00, 0x00,
                0x48, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x30,
                0x6C, 0xAE, 0x04, 0x48, 0x98, 0xBA, 0xC5, 0x7B,
                0x46, 0x96, 0x5F, 0xE7, 0x0D, 0x49, 0x6B, 0xEF,
                0xD8, 0x5C, 0x7A, 0x43, 0xAF, 0xFC, 0xDA, 0x8B,
                0x60, 0xEE, 0x4A, 0x3C, 0x1A, 0x00, 0x00, 0x00,
                0x0B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0D, 0x49,
                0x6B, 0xEF, 0xD8, 0x5C, 0x7A, 0x43, 0xAF, 0xFC,
                0xDA, 0x8B, 0x60, 0xEE, 0x4A, 0x3C, 0x07, 0x00,
                0x00, 0x00, 0x48, 0x00, 0x00, 0x00, 0x60, 0x01,
                0xED, 0x99, 0xFF, 0x17, 0x44, 0x4C, 0x9D, 0x98,
                0x1D, 0x7A, 0x6F, 0x94, 0x19, 0x21, 0x93, 0x2D,
                0x05, 0x8F, 0xCA, 0xAB, 0xC5, 0x4F, 0xA5, 0xAC,
                0xB0, 0x1D, 0xF4, 0xDB, 0xE5, 0x98, 0x02, 0x00,
                0x00, 0x00, 0x48, 0x00, 0x00, 0x00, 0xBC, 0x5B,
                0xF0, 0x23, 0xDE, 0x15, 0x2A, 0x4C, 0xA5, 0x5B,
                0xA9, 0xAF, 0x5C, 0xE4, 0x12, 0xEF, 0x0D, 0x49,
                0x6B, 0xEF, 0xD8, 0x5C, 0x7A, 0x43, 0xAF, 0xFC,
                0xDA, 0x8B, 0x60, 0xEE, 0x4A, 0x3C, 0x17, 0x00,
                0x00, 0x00, 0x1F, 0x00, 0x00, 0x00, 0x0E, 0x00,
                0x00, 0x00, 0x73, 0x00, 0x31, 0x00, 0x30, 0x00,
                0x30, 0x00, 0x30, 0x00, 0x31, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00
            };

            MtpVolumeShellItem item = new MtpVolumeShellItem(buf);

            Assert.IsTrue(item.Fields.Count == 8);

            Assert.IsTrue(item.Fields.ContainsKey("Size"));
            Assert.IsTrue(item.Fields.ContainsKey("Signature"));
            Assert.IsTrue(item.Fields.ContainsKey("TypeName"));
            Assert.IsTrue(item.Fields.ContainsKey("SubtypeName"));
            Assert.IsTrue(item.Fields.ContainsKey("StorageName"));
            Assert.IsTrue(item.Fields.ContainsKey("StorageId"));
            Assert.IsTrue(item.Fields.ContainsKey("FileSystemName"));
            Assert.IsTrue(item.Fields.ContainsKey("Description"));

            Assert.IsTrue(item.Fields["Size"] as ushort? == item.Size);
            Assert.IsTrue(item.Fields["Signature"] as uint? == item.Signature);
            Assert.IsTrue(item.Fields["TypeName"] as string == item.TypeName);
            Assert.IsTrue(item.Fields["SubtypeName"] as string == item.SubtypeName);
            Assert.IsTrue(item.Fields["StorageName"] as string == item.StorageName);
            Assert.IsTrue(item.Fields["StorageId"] as string == item.StorageId);
            Assert.IsTrue(item.Fields["FileSystemName"] as string == item.FileSystemName);
            Assert.IsTrue(item.Fields["Description"] as string == item.Description);

            Assert.IsTrue(item.Size == 1266);
            Assert.IsTrue(item.Signature == 0x10312005);
            Assert.IsTrue(item.TypeName == "Media Transfer Protocol");
            Assert.IsTrue(item.SubtypeName == "Volume");
            Assert.IsTrue(item.StorageName == "Internal Storage");
            Assert.IsTrue(item.StorageId == "SID-{10001,Internal Storage,30582562816}");
            Assert.IsTrue(item.FileSystemName == "DCF");
            Assert.IsTrue(item.Description == item.StorageName);
        }
    }
}