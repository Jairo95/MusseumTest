using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Description;
using QuizAppWeb.Models;
using QuizAppWeb.Models.Views;

namespace QuizAppWeb.Controllers
{
    public class CategoriesController : ApiController
    {
        private MusseumTestContext db = new MusseumTestContext();
        
        // GET: api/Category
        public List<ViewCategory> GetCategory()
        {
            List<Category> listCategory = db.Category.ToList<Category>();

            List<ViewCategory> listViewCategory = new List<ViewCategory>();
            listCategory.ForEach(delegate (Category category)
            {
                listViewCategory.Add(category);
            });
            return listViewCategory;
        }

        // POST: api/Category
        [HttpPost]
        public ViewCategory PostCategory([FromBody]Category category)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("No valido");
            }
            db.Category.Add(category);
            db.SaveChanges();
            ViewCategory viewCategory = category;
            return viewCategory;
        }

        // PUT: api/Categories/5
        [HttpPut]
        [Route("api/Categories/{id}")]
        public ViewCategory PutCategory(int id, Category category)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("No valido");
            }

            if (id != category.CategoryId)
            {
                throw new Exception("No valido");
            }

            db.Entry(category).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    throw new Exception("No valido");
                }
                else
                {
                    throw;
                }
            }

            ViewCategory viewCategory = category;

            return viewCategory;
        }

        // DELETE: api/Categories/5
        [ResponseType(typeof(Category))]
        public IHttpActionResult DeleteCategory(int id)
        {
            Category category = db.Category.Find(id);
            if (category == null)
            {
                return NotFound();
            }

            db.Category.Remove(category);
            db.SaveChanges();

            return Ok(category);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CategoryExists(int id)
        {
            return db.Category.Count(e => e.CategoryId == id) > 0;
        }
    }
}