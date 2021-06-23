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
    public class ProductDetailController : ControllerBase
    {
        private IProductDetail BbproductDetail;


        // GET: api/<BrandCatController>

        public ProductDetailController(IProductDetail PDetails)
        {
            BbproductDetail = PDetails;
        }

        [HttpGet]
        public IEnumerable<BbproductDetail> GetcbDetail()
        {
            return BbproductDetail.GetAll();
        }

    }
}
