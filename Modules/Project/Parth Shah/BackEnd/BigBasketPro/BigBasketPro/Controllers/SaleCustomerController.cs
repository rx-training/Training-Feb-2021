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
    public class SaleCustomerController : ControllerBase
    {

        private ISaleCustomer BbSaleCustomer;
        public SaleCustomerController(ISaleCustomer SCCustomer)
        {
            BbSaleCustomer = SCCustomer;
        }

        [HttpGet]
        public IEnumerable<BbSaleCustomer> GetcbDetail()
        {
            return BbSaleCustomer.GetAll();
        }


    }
}
