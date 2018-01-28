using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace QuizAppWeb.Models
{
    public class Person
    {
        public int PersonId { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Identity { get; set; }

        public string Phone { get; set; }

        public virtual ICollection<User> Users { get; set; }

    }

    class PersonDbContext : DbContext {
        public DbSet<Person> Persons { get; set; }
    }
}