using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using day17Assignment.Models;
using day17assignment.Model;
using Microsoft.AspNetCore.Authorization;

namespace day17Assignment.Controllers
{
    [Authorize(Roles = UserRoles.User)] //only user can authenticate this 
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DrugsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DrugsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Drugs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Drug>>> GetDrugs()
        {
            return await _context.Drugs.ToListAsync();
        }

        // GET: api/Drugs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Drug>> GetDrug(int id)
        {
            var drug = await _context.Drugs.FindAsync(id);

            if (drug == null)
            {
                return NotFound();
            }

            return drug;
        }

        // PUT: api/Drugs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDrug(int id, Drug drug)
        {
            if (id != drug.DrugId)
            {
                return BadRequest();
            }

            _context.Entry(drug).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DrugExists(id))
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

        // POST: api/Drugs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Drug>> PostDrug(Drug drug)
        {
            _context.Drugs.Add(drug);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDrug", new { id = drug.DrugId }, drug);
        }

        // DELETE: api/Drugs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDrug(int id)
        {
            var drug = await _context.Drugs.FindAsync(id);
            if (drug == null)
            {
                return NotFound();
            }

            _context.Drugs.Remove(drug);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DrugExists(int id)
        {
            return _context.Drugs.Any(e => e.DrugId == id);
        }
    }
}
