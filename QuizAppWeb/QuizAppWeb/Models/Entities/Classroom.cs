using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class Classroom
    {
        public int ClassroomId { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }
        public int UserCreate { get; set; }
        public int UserManager { get; set; }

        public virtual ICollection<Login> Logins { get; set; }

    }
}