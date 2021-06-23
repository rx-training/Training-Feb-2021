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
    public class CartController : ControllerBase
    {
        private ICart Cart;

        public CartController(ICart carts)
        {
            Cart = carts;
        }



        // GET: api/Products
        [HttpGet]
        public IEnumerable<Cart> GetCarts()
        {
            return Cart.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<Cart> GetCarts(int id)
        {

            return Cart.GetById(id);


        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("{id}")]
        public IActionResult PutCities(int id, Cart cart)
        {
            cart.CartId = id;
            Cart.Update(cart);
            return Ok(cart);

        }
        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public IActionResult PostCities(Cart cart
            )
        {

            Cart.Create(cart);
            return Ok(cart);

        }


        [HttpDelete("{id}")]
        public IActionResult DeleteCities(int id)
        {
            var pr = Cart.GetById(id);
            if (pr == null)
            {
                return NotFound();
            }



            Cart.Delete(pr);
            return NoContent();


        }
    }
}
