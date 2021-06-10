using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;

namespace ProjectBigBasket.Controllers
{
/*    [Authorize]*/

    /*[Authorize(Roles = UserRoles.Admin)]*/
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
       private IProduct Product;

        public ProductsController(IProduct Products)
        {
            Product = Products;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<Product> GetProducts()
        {
            return Product.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<Product> GetProduct(string id)
        {

         return Product.GetById(id);
            

        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("{id}")]
        public IActionResult PutProducts(string id, Product product)
        {
            product.ProductId = id;
            Product.Update(product);
            return Ok(product);

        }
        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public IActionResult PostProducts(Product product)
        {

            Product.Create(product);
            return Ok(product);

        }


        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(string id)
        {
            var pr = Product.GetById(id);
            if (pr == null)
            {
                return NotFound();
            }



            Product.Delete(pr);
            return NoContent();


        }
    }
}
