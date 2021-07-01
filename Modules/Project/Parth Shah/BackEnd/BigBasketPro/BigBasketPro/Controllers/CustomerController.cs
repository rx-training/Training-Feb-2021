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
    public class CustomerController : ControllerBase
    {
        private ICustomer Customer;

        public CustomerController(ICustomer customers)
        {
            Customer = customers;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<Customer> Getcustomers()
        {
            return Customer.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<Customer> Getcustomers(int id)
        {

            return Customer.GetById(id);


        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("{id}")]
        public IActionResult Putcustomers(int id, Customer customer)
        {
            customer.CustId = id;
            Customer.Update(customer);
            return Ok(customer);

        }
        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]

        public IActionResult Postcustomers(Customer customer
            )
        {

            Customer.Create(customer);
            return Ok(customer);

        }


        [HttpDelete("{id}")]
        public IActionResult Deletecustomers(int id)
        {
            var pr = Customer.GetById(id);
            if (pr == null)
            {
                return NotFound();
            }



            Customer.Delete(pr);
            return NoContent();


        }
    }
}
