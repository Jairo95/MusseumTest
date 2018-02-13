using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }

        public int QuizId { get; set; }

        public virtual Quiz Quiz { get; set; }

        public virtual ICollection<Answer> Answers { get; set; }

    }
}