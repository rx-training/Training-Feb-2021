using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PracticeGeneric.Interface;
using PracticeGeneric.Models;

namespace PracticeGeneric.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        //private IGeneric<Employee> _repository;
        private IEmployee Employee;
        public EmployeesController(IEmployee Employees)
        {
            Employee = Employees;
        }

        // GET: api/Employees
        [HttpGet]
        public IEnumerable<Employee> GetEmployees()
        {
            return Employee.GetAll();
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<Employee> GetEmployee(int id)
        {

            return Employee.GetById(id);

        }
      
        // PUT: api/Employees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public void  PutEmployee(int id, Employee employee)
        {

           Employee.Update(employee);
         
        }
       
      // POST: api/Employees
      // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
      [HttpPost]
      public IActionResult PostEmployee(Employee employee)
      {

            Employee.Create(employee);
            return Ok(employee);
        
      }

        //DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            var emp = Employee.GetById(id);
            if (emp == null)
            {
                return NotFound();
            }



            Employee.Delete(emp);
            return NoContent();


        }

    }
}
