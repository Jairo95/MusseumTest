using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace QuizAppWeb.Models
{
    public class Rol
    {
        public int RolId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Observation { get; set; }

        public virtual ICollection<User> Users { get; set; }

    }

    class RolDbContext : DbContext
    {
        public DbSet<Rol> Rols { get; set; }
    }
}