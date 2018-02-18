using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using QuizAppWeb.Models;
using QuizAppWeb.Models.Views;
using QuizAppWeb.Models.Custom;

namespace QuizAppWeb.Controllers
{
    public class LoginsController : ApiController
    {
        private MusseumTestContext db = new MusseumTestContext();

        // GET: api/Login
        public List<ViewLogin> GetLogins()
        {
            List<ViewLogin> listLogin = new List<ViewLogin>();
            db.Login.ToList<Login>().ForEach(delegate (Login login)
            {
                listLogin.Add(login);
            });
            return listLogin;
        }

        // GET: api/Login/5
        [ResponseType(typeof(Login))]
        public IHttpActionResult GetLogin(int id)
        {
            Login login = db.Login.Find(id);
            if (login == null)
            {
                return NotFound();
            }

            return Ok(login);
        }

        // PUT: api/Login/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLogin(int id, Login login)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != login.LoginId)
            {
                return BadRequest();
            }

            db.Entry(login).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoginExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        //         [ResponseType(typeof(LoginResponse))]
        // POST: api/Login
        [HttpPost]
        [Route("api/Login")]
        public LoginResponse PostLogin([FromBody] UserValidate userValidate)
        {
            if (!ModelState.IsValid)
            {
                throw new MTException
                {
                    Code = "666",
                    Name = "INVALID_USER",
                    Value = "Usuario o contrasenia incorrecta"
                };
            }
            Console.WriteLine("User validate: " + userValidate.Password + "-" + userValidate.Username);
            Login login = new Login();
            LoginResponse response = new LoginResponse();
            IQueryable<User> userFound = db.User.Where(
                user =>
                (user.Username == userValidate.Username) && (user.Password == userValidate.Password)
                );
            List<User> listUser = userFound.ToList<User>();
            
            if(listUser.Count != 1)
            {
                MTException mtx = new MTException
                {
                    Code = "666",
                    Name = "INVALID_USER",
                    Value = "Usuario o contrasenia incorrecta"
                };
                throw mtx;
            }
            listUser.ForEach(delegate (User user)
            {
                response.Error = "0";
                response.Rol = db.Rol.Find(user.RolId).Name;
                response.Status = "ok";
                response.UserId = user.UserId;
                response.Username = user.Username;
                login.UserId = user.UserId;
                login.Status = "ok";
                login.Rol = db.Rol.Find(user.RolId).Name;
                login.TimeOut = 360;
            });
            
            // db.Login.Add(login);
            // db.SaveChanges();
            // return CreatedAtRoute("DefaultApi", new { id = login.LoginId }, login);
            return response;
        }

        // Validate user
        [ResponseType(typeof(LoginResponse))]
        public IHttpActionResult PostValidate(int name, int value, UserValidate userValidate)
        {
            return null;
        }

        // DELETE: api/Login/5
        [ResponseType(typeof(Login))]
        public IHttpActionResult DeleteLogin(int id)
        {
            Login login = db.Login.Find(id);
            if (login == null)
            {
                return NotFound();
            }

            db.Login.Remove(login);
            db.SaveChanges();

            return Ok(login);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LoginExists(int id)
        {
            return db.Login.Count(e => e.LoginId == id) > 0;
        }
    }
}