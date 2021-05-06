using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace day15Practice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        List<Person> personList = null;
        // GET: api/<PersonController>
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            personList = PersonList();
            return personList;
        }

        private static List<Person> PersonList()
        {
            return new List<Person>() { new Person() { ID = 1, Name = "Parth", Address = "Dhrangadhra" },
                new Person() { ID = 2, Name = "Kush", Address = "Dhrangadhra" } };
        }

        // GET api/<PersonController>/5
        [HttpGet("{id}")]
        public Person Get(int id)
        {
            personList =  PersonList();
            Person person = personList.Find(p => p.ID == id);
            return person;
        }

        // POST api/<PersonController>
        [HttpPost]
        public List<Person> Post([FromBody] Person person)
        {
            personList = PersonList();
            personList.Add(person);
            return personList;
        }

        // PUT api/<PersonController>/5
        [HttpPut("{id}")]
        public Person Put(int id, [FromBody] Person person)
        {
            personList = PersonList();
           var oldperson =  personList.Find(p=> p.ID == id);
            oldperson = person;
            return oldperson;
        }

        // DELETE api/<PersonController>/5
        [HttpDelete("{id}")]
        public Boolean Delete(int id)
        {
            personList = PersonList();
            var oldPerson = personList.Find(p => p.ID == id);
            var result = personList.Remove(oldPerson);
            return result;
        }
    }
}
