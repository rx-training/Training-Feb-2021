using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StackOverFlow.Code;
using StackOverFlow.Models;
using StackOverFlow.Models.Authentication;
using StackOverFlow.UnitOfWorkPattern;
using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StackOverFlow.Controllers
{
    [Authorize]
    [Route("api/{id}/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<ApplicationUser> userManager;
        
        public UserController(IUnitOfWork unitOfWork,UserManager<ApplicationUser> userManager )
        {
            this._unitOfWork = unitOfWork;
            this.userManager = userManager;
            
        }


        
        //[HttpGet] 
        //public IActionResult GetCurrentUserId() 
        //{
        //    var user = userManager.Users.First(x => x.UserName == User.Identity.Name);

        //    return Ok(user); 
        //}



        //GET: api/<UserController>
        [HttpGet]
        public ActionResult<AppUser> GetUser(int id)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, id))
            {
                return Unauthorized();
            }
            AppUser myuser = _unitOfWork.AppUsers.GetById(id);
            return myuser;
        }

        [HttpPut]
        public ActionResult<AppUser> PostUser(int id, AppUser user)
        {
            var u = userManager.Users.AsNoTracking().First(x => x.UserName == User.Identity.Name);
            if (!_unitOfWork.AppUsers.ValidateUser(u.Id, id))
            {
                return Unauthorized();
            }
            _unitOfWork.AppUsers.UpdateUser(id, user);
            _unitOfWork.Complete();
            return user;
        }

        


    }
}
