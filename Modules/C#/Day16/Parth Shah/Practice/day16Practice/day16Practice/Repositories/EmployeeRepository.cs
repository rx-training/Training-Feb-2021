using day16Practice.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace day16Practice.Repositories
{
    public class EmployeeRepository : IEmployee
    {
        private readonly dayfiveContext context;

        public EmployeeRepository(dayfiveContext ctx)
        {
            context = ctx;
        }

        public async Task<Employee> AddEmployee(Employee employee)
        {
            //context.Employees.Add(employee);
            //context.SaveChanges();
            //return employee;

            var result = await context.Employees.AddAsync(employee);
            await context.SaveChangesAsync();
            return result.Entity;
        }

        public async Task<Employee> DeleteEmployee(int id)
        {
            /* Employee employee = context.Employees.FirstOrDefault(e => e.EmployeeId == id);
            if (employee != null)
            {
                context.Employees.Remove(employee);
                context.SaveChanges();
            }
            return employee;*/

            var result = await context.Employees
                .FirstOrDefaultAsync(e => e.EmployeeId == id);
            if (result != null)
            {
                context.Employees.Remove(result);
                await context.SaveChangesAsync();
                return result;
            }
            return null;
        }

        public Employee GetEmployee(int id)
        {
            return context.Employees.FirstOrDefault(e => e.EmployeeId == id);
        }

        public List<Employee> GetEmployees()
        {
            var emp = context.Employees.ToList();
            return emp;

        }

        public async Task<Employee> UpdateEmployee(Employee employee)
        {
          

            var result = await context.Employees
                 .FirstOrDefaultAsync(e => e.EmployeeId == employee.EmployeeId);
            if(result != null)
            {
                result.EmployeeId = employee.EmployeeId;
                result.FirstName = employee.FirstName;
                result.LastName = employee.LastName;
                result.Salary = employee.Salary;
                result.JoiningDate = employee.JoiningDate;
                result.Department = employee.Department;
                result.ManagerId = employee.ManagerId;

                await context.SaveChangesAsync();

                return result;
            }

            return null;
        }
    }

}
