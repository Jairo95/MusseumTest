using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using QuizAppWeb.Models;

namespace QuizAppWeb.Controllers
{
    public class LoginController : ApiController
    {
        // GET: service/Login
        [ResponseType(typeof(LoginResponse))]
        public IHttpActionResult GetLogin(String username, String password)
        {
            LoginResponse login = new LoginResponse();
            login.status = "ok";
            login.rol = "teacher";
            login.error = "200";

            return Ok(login);
        }
    }
}
