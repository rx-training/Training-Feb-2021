using BigBasketPro.Interfaces;
using BigBasketPro.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigBasketPro.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private ICity City;

        public CityController(ICity cities)
        {
            City = cities;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<City> GetCities()
        {
            return City.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<City> GetCities(int id)
        {

            return City.GetById(id);


        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("{id}")]
        public IActionResult PutCities(int id, City city)
        {
            city.CityId = id;
            City.Update(city);
            return Ok(city);

        }
        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public IActionResult PostCities(City city
            )
        {

            City.Create(city);
            return Ok(city);

        }


        [HttpDelete("{id}")]
        public IActionResult DeleteCities(int id)
        {
            var pr = City.GetById(id);
            if (pr == null)
            {
                return NotFound();
            }



            City.Delete(pr);
            return NoContent();


        }

        [HttpGet]
        [Route("country/{id}")]

        public IActionResult getCitybyCountry(int id)
        {
            var city = City.getCityCountry(id);
            return Ok(city);
        }
    }
}
