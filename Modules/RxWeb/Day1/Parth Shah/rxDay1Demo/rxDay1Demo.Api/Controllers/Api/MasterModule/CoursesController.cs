using Microsoft.AspNetCore.Mvc;
using System.Linq;
using rxDay1Demo.UnitOfWork.Main;
using rxDay1Demo.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace rxDay1Demo.Api.Controllers.MasterModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class CoursesController : BaseController<Cours,Cours,Cours>

    {
        public CoursesController(IMasterUow uow):base(uow) {}

    }
}
