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
    public class AnswersController : ApiController
    {
        private MusseumTestContext db = new MusseumTestContext();

        // GET: api/Answer
        public List<ViewAnswer> GetAnswers()
        {
            List<ViewAnswer> listViewAnswer = new List<ViewAnswer>();
            db.Answer.ToList<Answer>().ForEach(delegate (Answer answer)
            {
                listViewAnswer.Add(answer);
            });

            return listViewAnswer;
        }

        [HttpGet]
        [Route("api/Answers/byQuestionId/{QuestionId}")]
        public List<ViewAnswer> GetAnswerByQuestionId(int QuestionId)
        {
            List<ViewAnswer> listViewAnswer = new List<ViewAnswer>();
            List<Answer> listAnswer = (from p in db.Answer
                                   where p.QuestionId == QuestionId
                                   select p).ToList<Answer>();
            listAnswer.ForEach(delegate (Answer answer)
            {
                listViewAnswer.Add(answer);
            });
            return listViewAnswer;
        }

        // GET: api/Answer/5
        [ResponseType(typeof(Answer))]
        public IHttpActionResult GetAnswer(int id)
        {
            Answer answer = db.Answer.Find(id);
            if (answer == null)
            {
                return NotFound();
            }

            return Ok(answer);
        }

        // PUT: api/Answer/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAnswer(int id, Answer answer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != answer.AnswerId)
            {
                return BadRequest();
            }

            db.Entry(answer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AnswerExists(id))
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

        // POST: api/Answer
        [ResponseType(typeof(Answer))]
        public IHttpActionResult PostAnswer(Answer answer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Answer.Add(answer);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = answer.AnswerId }, answer);
        }

        // DELETE: api/Answer/5
        [ResponseType(typeof(Answer))]
        public IHttpActionResult DeleteAnswer(int id)
        {
            Answer answer = db.Answer.Find(id);
            if (answer == null)
            {
                return NotFound();
            }

            db.Answer.Remove(answer);
            db.SaveChanges();

            return Ok(answer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AnswerExists(int id)
        {
            return db.Answer.Count(e => e.AnswerId == id) > 0;
        }
    }
}