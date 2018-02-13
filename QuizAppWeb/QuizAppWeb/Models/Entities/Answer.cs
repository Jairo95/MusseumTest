using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class Answer
    {
        public int AnswerId { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }

        public int StatusId { get; set; }
        public int QuestionId { get; set; }

        public virtual Status Status { get; set; }
        public virtual Question Question { get; set; }
    }
}