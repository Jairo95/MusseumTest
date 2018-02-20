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
    public class RolsController : ApiController
    {
        private MusseumTestContext db = new MusseumTestContext();

        // GET: api/Rol
        public List<ViewRol> GetRols()
        {
            List<ViewRol> listRol = new List<ViewRol>();
            db.Rol.ToList<Rol>().ForEach(delegate (Rol rol)
            {
                listRol.Add(rol);
            });
            return listRol;
        }

        // GET: api/Rol/5
        [ResponseType(typeof(Rol))]
        public IHttpActionResult GetRol(int id)
        {
            Rol rol = db.Rol.Find(id);
            if (rol == null)
            {
                return NotFound();
            }

            return Ok(rol);
        }

        // POST: api/Rol
        [HttpPost]
        public ViewRol PostRol([FromBody]Rol rol)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("No valido");
            }
            db.Rol.Add(rol);
            db.SaveChanges();
            ViewRol viewRol = rol;
            return viewRol;
        }

        // PUT: api/Rol/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRol(int id, Rol rol)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rol.RolId)
            {
                return BadRequest();
            }

            db.Entry(rol).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RolExists(id))
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

        // DELETE: api/Rol/5
        [ResponseType(typeof(Rol))]
        public IHttpActionResult DeleteRol(int id)
        {
            Rol rol = db.Rol.Find(id);
            if (rol == null)
            {
                return NotFound();
            }

            db.Rol.Remove(rol);
            db.SaveChanges();

            return Ok(rol);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RolExists(int id)
        {
            return db.Rol.Count(e => e.RolId == id) > 0;
        }
    }
}