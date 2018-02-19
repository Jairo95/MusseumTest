using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizAppWeb.Models
{
    public class LogAnswer
    {
        public int LogAnswerId { get; set; }
        public string JsonQuiz { get; set; }
        public string JsonAnswer { get; set; }
        public DateTime DateCreate { get; set; }


        public int RecordId { get; set; }

        public virtual Record Record { get; set; }
    }
}