using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Day3RxwebBigB.UnitOfWork.Main;
using Day3RxwebBigB.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace Day3RxwebBigB.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class CartController : BaseController<Cart,Cart,Cart>

    {
        public CartController(IMasterUow uow):base(uow) {}

    }
}
