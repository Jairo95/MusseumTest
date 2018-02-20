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
    public class LevelsController : ApiController
    {
        private MusseumTestContext db = new MusseumTestContext();

        // GET: api/Level
        public List<ViewLevel> GetLevels()
        {
            List<ViewLevel> listLevel = new List<ViewLevel>();
            db.Level.ToList<Level>().ForEach(delegate (Level level)
            {
                listLevel.Add(level);
            });
            return listLevel;
        }

        // GET: api/Level/5
        [ResponseType(typeof(Level))]
        public IHttpActionResult GetLevel(int id)
        {
            Level level = db.Level.Find(id);
            if (level == null)
            {
                return NotFound();
            }

            return Ok(level);
        }

        // POST: api/Level
        [HttpPost]
        public ViewLevel PostLevel([FromBody]Level level)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("No valido");
            }
            db.Level.Add(level);
            db.SaveChanges();
            ViewLevel viewLevel = level;
            return viewLevel;
        }

        // PUT: api/Level/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLevel(int id, Level level)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != level.LevelId)
            {
                return BadRequest();
            }

            db.Entry(level).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LevelExists(id))
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

        // DELETE: api/Level/5
        [ResponseType(typeof(Level))]
        public IHttpActionResult DeleteLevel(int id)
        {
            Level level = db.Level.Find(id);
            if (level == null)
            {
                return NotFound();
            }

            db.Level.Remove(level);
            db.SaveChanges();

            return Ok(level);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LevelExists(int id)
        {
            return db.Level.Count(e => e.LevelId == id) > 0;
        }
    }
}