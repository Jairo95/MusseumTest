using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class Login
    {
        public int LoginId { get; set; }
        public string Rol { get; set; }
        public string Status { get; set; }
        public double TimeOut { get; set; }
        public DateTime DateLogin { get; set; }
        public DateTime DateLogout { get; set; }

        public int UserId { get; set; }

        public virtual User User { get; set; }


    }
}