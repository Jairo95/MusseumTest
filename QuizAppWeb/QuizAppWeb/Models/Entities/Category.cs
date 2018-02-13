﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class Category
    { 
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }

        public virtual ICollection<Quiz> Quizzes { get; set; }
    }
}