using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using day15Assignment.Models;

namespace day15Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeAssignmentsController : ControllerBase
    {
        private readonly day15AssignmentContext _context;

        public EmployeeAssignmentsController(day15AssignmentContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeAssignments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeAssignment>>> GetEmployeeAssignments()
        {
            return await _context.EmployeeAssignments.ToListAsync();
        }

        // GET: api/EmployeeAssignments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeAssignment>> GetEmployeeAssignment(int id)
        {
            var employeeAssignment = await _context.EmployeeAssignments.FindAsync(id);

            if (employeeAssignment == null)
            {
                return NotFound();
            }

            return employeeAssignment;
        }

        [HttpGet]
        [Route("/{EmployeeId}/Assignments/{AssignnmentId}")]
        public ActionResult<List<EmployeeAssignment>> GetAllAssignmentUsingId(int EmployeeId, int AssignnmentId)
        {
            var assig = _context.EmployeeAssignments.Where(S => S.EmployeeId == EmployeeId && S.AssignmentId == AssignnmentId).ToList();
            return assig;

        }

        // PUT: api/EmployeeAssignments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeAssignment(int id, EmployeeAssignment employeeAssignment)
        {
            if (id != employeeAssignment.Eaid)
            {
                return BadRequest();
            }

            _context.Entry(employeeAssignment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeAssignmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EmployeeAssignments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployeeAssignment>> PostEmployeeAssignment(EmployeeAssignment employeeAssignment)
        {
            _context.EmployeeAssignments.Add(employeeAssignment);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployeeAssignmentExists(employeeAssignment.Eaid))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployeeAssignment", new { id = employeeAssignment.Eaid }, employeeAssignment);
        }

        // DELETE: api/EmployeeAssignments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeAssignment(int id)
        {
            var employeeAssignment = await _context.EmployeeAssignments.FindAsync(id);
            if (employeeAssignment == null)
            {
                return NotFound();
            }

            _context.EmployeeAssignments.Remove(employeeAssignment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeAssignmentExists(int id)
        {
            return _context.EmployeeAssignments.Any(e => e.Eaid == id);
        }
    }
}
