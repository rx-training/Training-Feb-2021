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
    public class SaleDetailController : ControllerBase
    {
        private IbbSaleDetail BbSaleDetail;

        private ICustomer Customer;
        public SaleDetailController(IbbSaleDetail SDetails, ICustomer customer)
        {
            BbSaleDetail = SDetails;
            Customer = customer;
        }

        [HttpGet]
        public IEnumerable<BbSaleDetail> GetcbDetail()
        {
            return BbSaleDetail.GetAll();
        }

        [HttpGet]
        [Route("saleDetail/{customerId}")]
        public ActionResult GetsaleDetail(int customerId)
        {
            var cust = Customer.Find(a => a.CustId == customerId).FirstOrDefault();
            var detail = BbSaleDetail.Find(c => c.CustName == cust.CustName).ToList();        
            return Ok(detail);
        }
    }
}
