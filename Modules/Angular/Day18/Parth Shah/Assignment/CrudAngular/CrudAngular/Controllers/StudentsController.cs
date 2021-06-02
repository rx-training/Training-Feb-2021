using CrudAngular.Models.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        IStudent _student;

        public StudentController(IStudent student)
        {
            this._student = student;
        }

        [HttpGet]
        public IEnumerable<CrudAngular.Models.Student> GetStudents()
        {
            return _student.GetAll();
        }


        [HttpGet("{id}")]
        public ActionResult<CrudAngular.Models.Student> GetStudents(int id)
        {
            var student = _student.GetById(id);

            if (student == null)
            {
                return NotFound();
            }

            return student;
        }

        [HttpPut("{id}")]
        public ActionResult<CrudAngular.Models.Student> PutStudents(int id, CrudAngular.Models.Student student)
        {

            try
            {
                _student.Update(student);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetStudents(id);

        }


        [HttpPost]
        public ActionResult<CrudAngular.Models.Student> PostStudents(CrudAngular.Models.Student student)
        {

            try
            {
                _student.Create(student);
            }
            catch (DbUpdateException)
            {
                if (_student.Any(e => e.Id == student.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetStudents", new { id = student.Id }, student);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            var cinema = _student.GetById(id);
            if (cinema == null)
            {
                return NotFound();
            }

            _student.Delete(cinema);

            return NoContent();
        }


    }
}
