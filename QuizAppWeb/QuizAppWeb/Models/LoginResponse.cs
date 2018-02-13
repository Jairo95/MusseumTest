using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class LoginResponse
    {
        public String Status { get; set; }

        public String Rol { get; set; }

        public String Error { get; set; }
    }
}