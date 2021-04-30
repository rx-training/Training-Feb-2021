using day16Practice.Models;
using day16Practice.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace day16Practice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployee employee;

        public EmployeesController(IEmployee emp)
        {
            this.employee = emp;
        }

        //Get all employee
        [HttpGet]
        public ActionResult<List<Employee>> Get()
        {
            try
            {
                return Ok(employee.GetEmployees());

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error");
            }
        }
        //get employeeByID :

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)

        {
            try
            {
               var result = employee.GetEmployee(id);
                if (result == null)
                {
                    return NotFound();
                }
                return result;
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error");
            }

        }

        //Create the Employee

        [HttpPost]
        public async Task<ActionResult<Employee>> CreateEmployee([FromBody]Employee employee)
        {
            try
            {
                if (employee == null)
                {
                    return BadRequest();

                }

                var CreatedEmployee = await this.employee.AddEmployee(employee);

                return CreatedAtAction(nameof(GetEmployee), 
                    new { id = CreatedEmployee.EmployeeId },
                    CreatedEmployee);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error");
            }
        }

        //Put Method 

        [HttpPut("{id:int}")]

        public async Task<ActionResult<Employee>> UpdateEmployee(int id,Employee employee)

        {
            try
            {
                if(id!= employee.EmployeeId)
                {
                    return BadRequest("Employee Id mismatch");
                }
                var employeeUpdate = this.employee.GetEmployee(id);

                if (employeeUpdate == null)
                {
                    return NotFound($"Employee With Id :{id} not found");
                }
                return await this.employee.UpdateEmployee(employee);

            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error");

            }
        }


        //Delete Employee Method 

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(int id)
        {
            try
            {
                var employeeDelete = this.employee.GetEmployee(id);
                if(employeeDelete == null)
                {
                    return NotFound($"Employee With Id :{id} not found");
                 }

                return await this.employee.DeleteEmployee(id);

            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error");

            }
        }

    }
}
