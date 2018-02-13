using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class Record
    {
        public int RecordId { get; set; }
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public double Grade { get; set; }

        public int UserId { get; set; }
        public int LogAnswerId { get; set; }
        public int QuizId { get; set; }

        public virtual LogAnswer LogAnswer { get; set; }
        public virtual User User { get; set; }
        public virtual Quiz Quiz { get; set; }
    }
}