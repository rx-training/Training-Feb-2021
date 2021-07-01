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
    public class BrandController : ControllerBase
    {
        private IBrand Brand;

        public BrandController(IBrand Brands)
        {
            Brand = Brands;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<Brand> GetBrands()
        {
            return Brand.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<Brand> GetBrand(int id)
        {

            return Brand.GetById(id);


        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("{id}")]
        public IActionResult PutBrand(int id, Brand brand)
        {
            brand.BrandId = id;
            Brand.Update(brand);
            return Ok(brand);

        }
        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public IActionResult PostBrand(Brand brand)
        {

            Brand.Create(brand);
            return Ok(brand);

        }


        [HttpDelete("{id}")]
        public IActionResult DeleteBrand(int id)
        {
            var pr = Brand.GetById(id);
            if (pr == null)
            {
                return NotFound();
            }



            Brand.Delete(pr);
            return NoContent();


        }

        [HttpGet]
        [Route("category/{id}")]

        public IActionResult getBrandbyCategoryId(int id)
        {
            var brand = Brand.getBrandByCatId(id);
            return Ok(brand);
        }

    }
}
