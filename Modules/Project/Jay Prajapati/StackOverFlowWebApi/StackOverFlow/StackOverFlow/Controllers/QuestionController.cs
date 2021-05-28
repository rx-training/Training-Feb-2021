using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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

namespace StackOverFlow.Controllers
{
    
    [Route("api/{userid}/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<ApplicationUser> userManager;
        public QuestionController(IUnitOfWork unitOfWork, UserManager<ApplicationUser> userManager)
        {
            this._unitOfWork = unitOfWork;
            this.userManager = userManager;

        }

        [HttpGet]
        [Route("{queId}")]
        public ActionResult<Question> GetQuestion(int userid,int queId)
        {
            //var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            //if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            //{
            //    return Unauthorized();
            //}
            Question Que = _unitOfWork.Question.GetById(queId);
            Que.TotalViews += 1;
            _unitOfWork.Question.UpdateQuestion(queId, Que);
            _unitOfWork.Complete();
            return Que;
        }


        [Authorize]
        [HttpPost]
        public ActionResult<Question> PostQuestion(int userid, Question Que)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            {
                return Unauthorized();
            }
            Que.UserId = userid;
            Que.Vote = 0;
            Que.TotalViews = 0;
            Que.TimeOfAsk = DateTime.Now;
            _unitOfWork.Question.Add(Que);
            _unitOfWork.Complete();
            return Que;
        }


        [Authorize]
        [HttpPut]
        public ActionResult PutQuestion(int userid,int queId, Question que)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            {
                return Unauthorized();
            }
            if (!_unitOfWork.Question.ValidateUserQuestion(userid,queId))
            {
                return Unauthorized();
            }
            _unitOfWork.Question.UpdateQuestion(queId, que);
            _unitOfWork.Complete();
            return Ok();

        }

        [Authorize]
        [HttpPost]
        [Route("{queId}")]
        public ActionResult GiveVoteToQue(int queid,int userid)
        {
            var user = userManager.Users.First(x => x.UserName == User.Identity.Name);
            if (!_unitOfWork.AppUsers.ValidateUser(user.Id, userid))
            {
                return Unauthorized();
            }
            if(_unitOfWork.AppUsers.GetById(userid).Reputation < 50)
            {
                return BadRequest("You must have atleast 50 Reputaion points to give vote");
            }
            Question que = _unitOfWork.Question.GetById(queid);
            que.Vote += 1;
            _unitOfWork.Question.UpdateQuestion(queid, que);
            _unitOfWork.Complete();
            return Ok(que);
        }




    }
}
