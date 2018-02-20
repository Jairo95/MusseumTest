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
    public class ClassroomsController : ApiController
    {
        private MusseumTestContext db = new MusseumTestContext();

        // GET: api/Classrooms
        public List<ViewClassroom> GetClassrooms()
        {
            List<ViewClassroom> listClasroom = new List<ViewClassroom>();
            db.Classroom.ToList<Classroom>().ForEach(delegate (Classroom classroom)
            {
                listClasroom.Add(classroom);
            });
            return listClasroom;
        }

        // GET: api/Classrooms/5
        public ViewClassroom GetClassroom(int id)
        {
            ViewClassroom classroom = db.Classroom.Find(id);
            if (classroom == null)
            {
                throw new Exception("No encontrado");
            }

            return classroom;
        }

        // POST: api/Classroom
        [HttpPost]
        public ViewClassroom PostClassroom([FromBody]Classroom classroom)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("No valido");
            }
            db.Classroom.Add(classroom);
            db.SaveChanges();
            ViewClassroom viewClassroom = classroom;
            return viewClassroom;
        }

        // PUT: api/Classrooms/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutClassroom(int id, Classroom classroom)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != classroom.ClassroomId)
            {
                return BadRequest();
            }

            db.Entry(classroom).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClassroomExists(id))
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

        // DELETE: api/Classrooms/5
        [ResponseType(typeof(Classroom))]
        public IHttpActionResult DeleteClassroom(int id)
        {
            Classroom classroom = db.Classroom.Find(id);
            if (classroom == null)
            {
                return NotFound();
            }

            db.Classroom.Remove(classroom);
            db.SaveChanges();

            return Ok(classroom);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ClassroomExists(int id)
        {
            return db.Classroom.Count(e => e.ClassroomId == id) > 0;
        }
    }
}