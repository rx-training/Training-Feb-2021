using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Controllers
{
   /* [Authorize]*/
    //  [Authorize(Roles = UserRoles.User)] //only user can authenticate this
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
{
    private ICategory Category;


    public CategoryController(ICategory categories)
    {
        Category = categories;
    }

    // GET: api/Products
    [HttpGet]
    public IEnumerable<Category> GetCategories()
    {
        return Category.GetAll();
    }

    // GET: api/Products/5
    [HttpGet("{id}")]
    public async Task<Category> GetCategory(string id)
    {

        return Category.GetById(id);


    }

    // PUT: api/Products/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut]
        [Route("{id}")]
        public IActionResult PutCategory(string id, Category category)
    {
            category.CategoryId = id;
        Category.Update(category);
        return Ok(category);

    }
        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        [HttpPost]
        public IActionResult PostCategory(Category category)
    {

        Category.Create(category);
        return Ok(category);

    }


    [HttpDelete("{id}")]
    public IActionResult DeleteCategory(string id)
    {
        var pr = Category.GetById(id);
        if (pr == null)
        {
            return NotFound();
        }


           /* using (var context = new BigBasketContext())
            {
                var f = context.Brands.Find();
            }*/
                Category.Delete(pr);
        return NoContent();


    }


       
    }
}
