using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace QuizAppWeb.Models
{
    public class User
    {
        public int UserId { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public int IdPerson { get; set; }

        public int RolId { get; set; }

        public virtual Person Person { get; set; }

    }

    class UserDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
    }
}