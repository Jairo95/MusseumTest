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
    public class PeopleController : ApiController
    {
        private MusseumTestContext db = new MusseumTestContext();

        // GET: api/People
        public List<ViewPerson> GetPeople()
        {
            List<ViewPerson> listViewPerson = new List<ViewPerson>();
            db.People.ToList<Person>().ForEach(delegate (Person person)
            {
                listViewPerson.Add(person);
            });

            return listViewPerson;
        }

        // GET: api/People/5
        public ViewPerson GetPerson(int id)
        {
            ViewPerson person = db.People.Find(id);
            if (person == null)
            {
                Exception ex = new Exception("Persona no encontrada");
                throw ex;
            }

            return person;
        }

        // PUT: api/People/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPerson(int id, Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != person.PersonId)
            {
                return BadRequest();
            }

            db.Entry(person).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonExists(id))
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

        // POST: api/People
        [HttpPost]
        public ViewPerson PostPerson(Person person)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("No valido");
            }
            db.People.Add(person);
            db.SaveChanges();
            ViewPerson viewPerson = person;
            return viewPerson;
        }

        // DELETE: api/People/5
        [ResponseType(typeof(Person))]
        public IHttpActionResult DeletePerson(int id)
        {
            Person person = db.People.Find(id);
            if (person == null)
            {
                return NotFound();
            }

            db.People.Remove(person);
            db.SaveChanges();

            return Ok(person);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PersonExists(int id)
        {
            return db.People.Count(e => e.PersonId == id) > 0;
        }
    }
}