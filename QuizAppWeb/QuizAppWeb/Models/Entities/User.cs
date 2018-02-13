using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public int PersonId { get; set; }
        public int RolId { get; set; }

        public virtual Person Person { get; set; }

        public virtual ICollection<Record> Records { get; set; }
        public virtual ICollection<Login> Logins { get; set; }

    }

}