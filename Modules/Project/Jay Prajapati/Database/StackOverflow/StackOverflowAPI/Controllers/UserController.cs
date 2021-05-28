using Microsoft.AspNetCore.Mvc;
using StackOverflowAPI.GenericRepository;
using StackOverflowAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StackOverflowAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IGenericRepository<Users> repository = null;
        public UserController()
        {
            this.repository = new GenericRepository<Users>();
        }
        public UserController(IGenericRepository<Users> repository)
        {
            this.repository = repository;
        }

        //Get All Users
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var model = repository.GetAll();
            return Ok(model);
        }

        // Get User By Id
        [HttpGet("{id}")]
        public IActionResult GetUser(int Id)
        {
            var user = repository.GetById(Id);
            return Ok(user);
        }

        
        //// GET: api/<UserController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/<UserController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<UserController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<UserController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<UserController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
