using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class Status
    {
        public int StatusId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Answer> Answers { get; set; }
    }
}