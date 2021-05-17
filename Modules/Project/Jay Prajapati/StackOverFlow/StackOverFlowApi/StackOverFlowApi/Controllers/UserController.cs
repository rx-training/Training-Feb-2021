using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StackOverFlowApi.Repositories;
using StackOverFlowApi.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlowApi.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
       
        public UserController(UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            
        }


        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var allUsers = _unitOfWork.Users.GetAll();
            return Ok(allUsers);
        }
    }
}
