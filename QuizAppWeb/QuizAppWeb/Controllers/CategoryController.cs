using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using QuizAppWeb.Models;
using QuizAppWeb.Models.Views;

namespace QuizAppWeb.Controllers
{
    public class CategoryController : ApiController
    {

        private MusseumTestContext db = new MusseumTestContext();
        // GET: api/Answers
        public List<ViewCategory> GetCategory()
        {
            List<Category> listCategory = db.Categories.ToList<Category>();

            List<ViewCategory> listViewCategory = new List<ViewCategory>();
            listCategory.ForEach(delegate(Category category)
            {
                listViewCategory.Add(category);
            });
            return listViewCategory;
        }
    }
}
