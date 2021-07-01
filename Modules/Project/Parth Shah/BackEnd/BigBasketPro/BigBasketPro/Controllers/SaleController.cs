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
    public class SaleController : ControllerBase
    {
        private ISale Sale;
        public SaleController(ISale sales)
        {
            Sale = sales;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<Sale> GetSales()
        {
            return Sale.GetAll();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<Sale> GetSale(int id)
        {

            return Sale.GetById(id);


        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("{id}")]
        public IActionResult PutSale(int id, Sale sale)
        {
            sale.SaleId = id;

            Sale.Update(sale);
            return Ok(sale);

        }
        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        [HttpPost]
        public IActionResult PostSale(Sale sale)
        {
            sale.Taxes = 12;
            sale.InvoiceDate = DateTime.Now;
            sale.InvoiceAmount = (decimal)((sale.ProductPrice * sale.ProductQty) + sale.Taxes );
            Sale.Create(sale);
            return Ok(sale);

        }


        [HttpDelete("{id}")]
        public IActionResult DeleteSale(int id)
        {
            var pr = Sale.GetById(id);
            if (pr == null)
            {
                return NotFound();
            }



            Sale.Delete(pr);
            return NoContent();


        }
    }


}
