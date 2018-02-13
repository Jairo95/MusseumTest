using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace QuizAppWeb.Models.Views
{
    public class ViewCategory
    {
        [Key]
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }

        public static implicit operator ViewCategory(Category category)
        {
            return new ViewCategory
            {
                CategoryId = category.CategoryId,
                Name = category.Name,
                Description = category.Description,
                Observation = category.Observation
            };
        }

        public static implicit operator Category( ViewCategory viewCategory)
        {
            return new Category
            {
                CategoryId = viewCategory.CategoryId,
                Name = viewCategory.Name,
                Description = viewCategory.Description,
                Observation = viewCategory.Observation
            };

        }
    }

}