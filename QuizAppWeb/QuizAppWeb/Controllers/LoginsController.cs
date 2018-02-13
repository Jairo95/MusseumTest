using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
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

        // GET: api/Logins
        public List<ViewLogin> GetLogins()
        {
            List<ViewLogin> listLogin = new List<ViewLogin>();
            db.Logins.ToList<Login>().ForEach(delegate (Login login)
            {
                listLogin.Add(login);
            });
            return listLogin;
        }

        // GET: api/Logins/5
        [ResponseType(typeof(Login))]
        public IHttpActionResult GetLogin(int id)
        {
            Login login = db.Logins.Find(id);
            if (login == null)
            {
                return NotFound();
            }

            return Ok(login);
        }

        // PUT: api/Logins/5
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

        // POST: api/Logins
        [ResponseType(typeof(LoginResponse))]
        public IHttpActionResult PostLogin([FromBody] UserValidate userValidate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Console.WriteLine("User validate: " + userValidate.Password + "-" + userValidate.Username);
            Login login = new Login();
            LoginResponse response = new LoginResponse();
            IQueryable<User> userFound = db.Users.Where(
                user =>
                (user.Username == userValidate.Username) && (user.Password == userValidate.Password)
                );
            List<User> listUser = userFound.ToList<User>();
            
            if(listUser.Count != 1)
            {
                throw new MTException {
                    Code = "666",
                    Name = "INVALID_USER",
                    Value = "Usuario o contrasenia incorrecta"
                };
            }
            listUser.ForEach(delegate (User user)
            {
                response.Error = "0";
                response.Rol = db.Rols.Find(user.RolId).Name;
                response.Status = "ok";
                login.UserId = user.UserId;
                login.Status = "ok";
                login.Rol = db.Rols.Find(user.RolId).Name;
                login.TimeOut = 360;
            });
            
            //db.Logins.Add(login);
            //db.SaveChanges();
            // return CreatedAtRoute("DefaultApi", new { id = login.LoginId }, login);
            return Ok(response);
        }

        // Validate user
        [ResponseType(typeof(LoginResponse))]
        public IHttpActionResult PostValidate(int name, int value, UserValidate userValidate)
        {
            return null;
        }

        // DELETE: api/Logins/5
        [ResponseType(typeof(Login))]
        public IHttpActionResult DeleteLogin(int id)
        {
            Login login = db.Logins.Find(id);
            if (login == null)
            {
                return NotFound();
            }

            db.Logins.Remove(login);
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
            return db.Logins.Count(e => e.LoginId == id) > 0;
        }
    }
}