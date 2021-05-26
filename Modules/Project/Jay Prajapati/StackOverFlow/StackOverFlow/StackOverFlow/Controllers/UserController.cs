using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StackOverFlow.Models;
using StackOverFlow.Models.Authentication;
using StackOverFlow.UnitOfWorkPattern;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StackOverFlow.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        
        public UserController(IUnitOfWork unitOfWork )
        {
            this._unitOfWork = unitOfWork;
            
        }


        // GET: api/<UserController>
        [HttpGet]
        public IActionResult GetUser()
        {

            string userid = Code.ExtensionMethods.getUserName(this.User);
            //this.User.FindFirst(u=>u.Value);
            //string userid = 
            //var u = _unitOfWork.Users.Find(u => u.ApplicationUserId == userId).First();

            //if (!_unitOfWork.Users.ValidateUser(userId, id))
            //{
            //    return Unauthorized();
            //}
            //var user = _unitOfWork.Users.GetAll();
            return Ok(userid);
        }

        [HttpPost]
        public IActionResult PostUser(AppUser user)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            user.ApplicationUserId = cred;
            _unitOfWork.AppUsers.Add(user);
            _unitOfWork.Complete();
            return Ok(user);
        }

        [HttpPut]
        public IActionResult UpdateUser(int id,AppUser user)
        {
            _unitOfWork.AppUsers.UpdateUser(id, user);
            _unitOfWork.Complete();
            return Ok(user);
        }

        
    }
}
