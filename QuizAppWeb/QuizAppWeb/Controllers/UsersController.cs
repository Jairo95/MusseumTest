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

namespace QuizAppWeb.Controllers
{
    public class UsersController : ApiController
    {
        private MusseumTestContext db = new MusseumTestContext();

        // GET: api/User
        public List<ViewUser> GetUsers()
        {

            List<ViewUser> listViewUser = new List<ViewUser>();
            db.User.ToList<User>().ForEach(delegate (User user)
            {
                listViewUser.Add(user);
            });

            return listViewUser;
        }

        // GET: api/User/5
        public ViewUser GetUser(int id)
        {
            ViewUser user = db.User.Find(id);
            if (user == null)
            {
                throw new Exception("Usuario no encontrado");
            }

            return user;
        }

        // PUT: api/User/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.UserId)
            {
                return BadRequest();
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/User
        [HttpPost]
        public ViewUser PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("No valido");
            }

            db.User.Add(user);
            db.SaveChanges();

            ViewUser viewUser = user;

            return viewUser;
        }

        // DELETE: api/User/5
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            User user = db.User.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            db.User.Remove(user);
            db.SaveChanges();

            return Ok(user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.User.Count(e => e.UserId == id) > 0;
        }
    }
}