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

        // GET: api/Person
        public List<ViewPerson> GetPeople()
        {
            List<ViewPerson> listViewPerson = new List<ViewPerson>();
            db.Person.ToList<Person>().ForEach(delegate (Person person)
            {
                listViewPerson.Add(person);
            });

            return listViewPerson;
        }
        [HttpGet]
        [Route("api/People/byRol/{rolId}")]
        public List<ViewPerson> GetPeopleByRol(int rolId)
        {
            List<ViewPerson> listViewPerson = new List<ViewPerson>();
            List<Person> listPerson= (from p in db.Person
                                      join u in db.User on p.PersonId equals u.PersonId
                                      where u.RolId == rolId
                                      select p).ToList<Person>();
            listPerson.ForEach(delegate (Person person)
            {
                listViewPerson.Add(person);
            });
            return listViewPerson;
        }

        // GET: api/Person/5
        public ViewPerson GetPerson(int id)
        {
            ViewPerson person = db.Person.Find(id);
            if (person == null)
            {
                Exception ex = new Exception("Persona no encontrada");
                throw ex;
            }

            return person;
        }


        // PUT: api/Person/5
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

        // POST: api/Person
        [HttpPost]
        public ViewPerson PostPerson([FromBody]Person person)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("No valido");
            }
            db.Person.Add(person);
            db.SaveChanges();
            ViewPerson viewPerson = person;
            return viewPerson;
        }

        // DELETE: api/Person/5
        [ResponseType(typeof(Person))]
        public IHttpActionResult DeletePerson(int id)
        {
            Person person = db.Person.Find(id);
            if (person == null)
            {
                return NotFound();
            }

            db.Person.Remove(person);
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
            return db.Person.Count(e => e.PersonId == id) > 0;
        }
    }
}