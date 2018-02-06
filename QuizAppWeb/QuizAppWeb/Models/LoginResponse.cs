using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class LoginResponse
    {
        public String status { get; set; }

        public String rol { get; set; }

        public String error { get; set; }
    }
}