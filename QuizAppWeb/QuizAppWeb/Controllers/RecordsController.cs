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
    public class RecordsController : ApiController
    {
        private MusseumTestContext db = new MusseumTestContext();

        // GET: api/Record
        public IQueryable<Record> GetRecords()
        {
            return db.Record;
        }

        [HttpGet]
        [Route("api/Records/byQuiz/{QuizId}")]
        public List<ViewRecord> GetRecordByQuizId(int QuizId)
        {
            List<ViewRecord> listViewRecord = new List<ViewRecord>();
            List<Record> listRecord = (from p in db.Record
                                       join u in db.User on p.UserId equals u.UserId
                                       where p.QuizId == QuizId
                                       select p).ToList<Record>();
            listRecord.ForEach(delegate (Record record)
            {
                listViewRecord.Add(record);
            });
            return listViewRecord;
        }


        [HttpGet]
        [Route("api/Records/byUser/{UserId}")]
        public List<ViewRecord> GetRecordByUserId(int UserId)
        {
            List<ViewRecord> listViewRecord = new List<ViewRecord>();
            List<Record> listRecord = (from p in db.Record
                                       join u in db.User on p.UserId equals u.UserId
                                       where p.UserId == UserId
                                       select p).ToList<Record>();
            listRecord.ForEach(delegate (Record record)
            {
                listViewRecord.Add(record);
            });
            return listViewRecord;
        }



        // GET: api/Record/5
        [ResponseType(typeof(Record))]
        public IHttpActionResult GetRecord(int id)
        {
            Record record = db.Record.Find(id);
            if (record == null)
            {
                return NotFound();
            }

            return Ok(record);
        }

        // PUT: api/Record/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRecord(int id, Record record)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != record.RecordId)
            {
                return BadRequest();
            }

            db.Entry(record).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecordExists(id))
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

        // POST: api/Record
        [HttpPost]
        public ViewRecord PostRecord([FromBody]Record record)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("No valido");
            }
            db.Record.Add(record);
            db.SaveChanges();
            ViewRecord viewRecord = record;
            return viewRecord;
        }

        // DELETE: api/Record/5
        [ResponseType(typeof(Record))]
        public IHttpActionResult DeleteRecord(int id)
        {
            Record record = db.Record.Find(id);
            if (record == null)
            {
                return NotFound();
            }

            db.Record.Remove(record);
            db.SaveChanges();

            return Ok(record);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RecordExists(int id)
        {
            return db.Record.Count(e => e.RecordId == id) > 0;
        }
    }
}