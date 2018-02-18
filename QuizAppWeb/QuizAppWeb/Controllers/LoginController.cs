using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using QuizAppWeb.Models;
using QuizAppWeb.Models.Custom;

namespace QuizAppWeb.Controllers
{
    public class LoginController : ApiController
    {

        private MusseumTestContext db = new MusseumTestContext();
        // GET: service/Login
        [ResponseType(typeof(LoginResponse))]
        public IHttpActionResult PostLogin(String username, String password, UserValidate userValidate)
        {
            Console.WriteLine("User validate: " + userValidate.Password + "-" + userValidate.Username);
            Login login = new Login();
            LoginResponse response = new LoginResponse();
            IQueryable<User> userFound = db.User.Where(
                user =>
                (user.Username == userValidate.Username) && (user.Password == userValidate.Password)
                );
            List<User> listUser = userFound.ToList<User>();
            /*
            if(listUser.Count != 1)
            {
                throw new MTException {
                    Code = "666",
                    Name = "INVALID_USER",
                    Value = "Usuario o contrasenia incorrecta"
                };
            }*/
            listUser.ForEach(delegate (User user)
            {
                response.Error = "0";
                response.Rol = db.Rol.Find(user.RolId).Name;
                response.Status = "ok";
            });
            return Ok(response);
        }
    }
}
