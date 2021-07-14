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
	
	public class BrandController : BaseController<Brand,Brand,Brand>

    {
        public BrandController(IMasterUow uow):base(uow) {}

    }
}
