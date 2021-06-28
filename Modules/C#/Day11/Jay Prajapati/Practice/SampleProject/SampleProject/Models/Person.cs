﻿using System;
using System.Collections.Generic;

#nullable disable

namespace SampleProject.Models
{
    public partial class Person
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int? Age { get; set; }
        public DateTime? DateOfBirth { get; set; }
    }
}