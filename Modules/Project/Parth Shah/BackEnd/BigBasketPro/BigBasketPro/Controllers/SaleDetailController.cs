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
        public SaleDetailController(IbbSaleDetail SDetails)
        {
            BbSaleDetail = SDetails;
        }

        [HttpGet]
        public IEnumerable<BbSaleDetail> GetcbDetail()
        {
            return BbSaleDetail.GetAll();
        }

    }
}
