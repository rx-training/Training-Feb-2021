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

        private IProduct Product;

        public CartController(ICart carts, IProduct product)
        {
            Cart = carts;
            Product = product;
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


        [HttpGet]
        [Route("cartDetail/{customerId}")]
        public ActionResult GetCartDetail(int customerId)
        {

            var k = Cart.Find(c=>c.CustId == customerId).ToArray();
            var l = k.Length;
            var product = new List<Product>();
            for (var i = 0;i<k.Length;i++)
            {
                var p = Product.Find(p => p.ProductId == k[i].ProductId).FirstOrDefault();
                product.Add(p);
            }
            return Ok(product);
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
