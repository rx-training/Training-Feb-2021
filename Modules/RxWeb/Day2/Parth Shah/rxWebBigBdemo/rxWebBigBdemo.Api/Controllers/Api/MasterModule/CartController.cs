using Microsoft.AspNetCore.Mvc;
using System.Linq;
using rxWebBigBdemo.UnitOfWork.Main;
using rxWebBigBdemo.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace rxWebBigBdemo.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class CartController : BaseController<Cart,Cart,Cart>

    {
        public CartController(IMasterUow uow):base(uow) {}

    }
}