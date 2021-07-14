using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Day3RxwebBigB.Domain.UserModule;
using Day3RxwebBigB.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace Day3RxwebBigB.Api.Controllers.UserModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class UsersController : BaseDomainController<User>

    {
        public UsersController(IUserDomain domain):base(domain) {}

    }
}
