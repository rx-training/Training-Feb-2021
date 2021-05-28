using System;
using System.Collections.Generic;

#nullable disable

namespace day15Assignment.Models
{
    public partial class Assignment
    {
        public Assignment()
        {
            EmployeeAssignments = new HashSet<EmployeeAssignment>();
            Employees = new HashSet<Employee>();
        }

        public int AssignnmentId { get; set; }
        public string ActionCode { get; set; }
        public string ActionReasonCode { get; set; }
        public DateTime? ActualTerminationCode { get; set; }
        public string AssignmentCategory { get; set; }
        public string AssignmentExtraInf { get; set; }
        public string AssignnmentName { get; set; }
        public string AssignnmentNumber { get; set; }
        public DateTime? AssignnmentProjectEndDate { get; set; }
        public string AssignmentStatus { get; set; }
        public DateTime? CreationDate { get; set; }
        public int? DepartmentId { get; set; }
        public string FullPartTime { get; set; }
        public int? JobId { get; set; }
        public int? LocationId { get; set; }
        public int? ManagerId { get; set; }

        public virtual ICollection<EmployeeAssignment> EmployeeAssignments { get; set; }
        public virtual ICollection<Employee> Employees { get; set; }
    }
}
