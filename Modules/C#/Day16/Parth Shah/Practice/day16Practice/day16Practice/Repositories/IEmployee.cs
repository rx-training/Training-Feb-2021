using day16Practice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace day16Practice.Repositories
{
    public interface IEmployee
    {

        List<Employee> GetEmployees();

       Task<Employee>  AddEmployee(Employee employee);

        Employee GetEmployee(int id);

        Task<Employee> UpdateEmployee(Employee employee);

        Task<Employee> DeleteEmployee(int id);
    }
}
