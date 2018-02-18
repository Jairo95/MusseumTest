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

namespace QuizAppWeb.Controllers
{
    public class LogAnswersController : ApiController
    {
        private MusseumTestContext db = new MusseumTestContext();

        // GET: api/LogAnswer
        public IQueryable<LogAnswer> GetLogAnswers()
        {
            return db.LogAnswer;
        }

        // GET: api/LogAnswer/5
        [ResponseType(typeof(LogAnswer))]
        public IHttpActionResult GetLogAnswer(int id)
        {
            LogAnswer logAnswer = db.LogAnswer.Find(id);
            if (logAnswer == null)
            {
                return NotFound();
            }

            return Ok(logAnswer);
        }

        // PUT: api/LogAnswer/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLogAnswer(int id, LogAnswer logAnswer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != logAnswer.LogAnswerId)
            {
                return BadRequest();
            }

            db.Entry(logAnswer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LogAnswerExists(id))
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

        // POST: api/LogAnswer
        [ResponseType(typeof(LogAnswer))]
        public IHttpActionResult PostLogAnswer(LogAnswer logAnswer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.LogAnswer.Add(logAnswer);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = logAnswer.LogAnswerId }, logAnswer);
        }

        // DELETE: api/LogAnswer/5
        [ResponseType(typeof(LogAnswer))]
        public IHttpActionResult DeleteLogAnswer(int id)
        {
            LogAnswer logAnswer = db.LogAnswer.Find(id);
            if (logAnswer == null)
            {
                return NotFound();
            }

            db.LogAnswer.Remove(logAnswer);
            db.SaveChanges();

            return Ok(logAnswer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LogAnswerExists(int id)
        {
            return db.LogAnswer.Count(e => e.LogAnswerId == id) > 0;
        }
    }
}