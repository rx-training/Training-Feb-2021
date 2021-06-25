using System;
using System.Collections.Generic;

#nullable disable

namespace day15Assignment.Models
{
    public partial class Employee
    {
        public Employee()
        {
            EmployeeAssignments = new HashSet<EmployeeAssignment>();
        }

        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string AdreessLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string Assignments { get; set; }
        public int? CitizenshipId { get; set; }
        public string CitizenshipshipCode { get; set; }
        public string CitizenshipStatus { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public DateTime? DrivingLicenseExpDate { get; set; }
        public int? DrivingLicenseId { get; set; }
        public string Gender { get; set; }
        public DateTime? HireDate { get; set; }
        public string HomePhoneNumber { get; set; }
        public string MaritalStatus { get; set; }
        public int? AssignmentId { get; set; }

        public virtual Assignment Assignment { get; set; }
        public virtual ICollection<EmployeeAssignment> EmployeeAssignments { get; set; }
    }
}
