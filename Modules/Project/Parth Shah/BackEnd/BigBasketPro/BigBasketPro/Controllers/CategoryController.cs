﻿using BigBasketPro.Interfaces;
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
    public class CategoryController : ControllerBase
    {

        private ICategory Category;
        private IBrand CatBrand;

        public CategoryController(ICategory categories, IBrand catbrands)
        {
            Category = categories;
            CatBrand = catbrands;
        }
        // GET: api/Products
        [HttpGet]
        public IEnumerable<Category> GetCategories()
        {

            return Category.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public ActionResult GetCategory(int id)
        {
            var cat = Category.GetById(id);
            /*            cat.Brands = CatBrand.Find(b => b.CategoryId == id).ToList();*/
            return Ok(cat);


        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("{id}")]
        public IActionResult PutCategory(int id, Category category)
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
        public IActionResult DeleteCategory(int id)
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
