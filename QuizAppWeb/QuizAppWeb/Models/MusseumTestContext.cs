using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Npgsql;
using QuizAppWeb.Models.Views;

namespace QuizAppWeb.Models
{
    public class MusseumTestContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public MusseumTestContext() : base("name=MusseumTestContextAWS")
        {

        }

        public DbSet<Rol> Rol { get; set; }
        public DbSet<Person> Person { get; set; }
        public DbSet<User> User { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Classroom> Classroom { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Login> Login { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Record> Record { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.LogAnswer> LogAnswer { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Quiz> Quiz { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Status> Status { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Level> Level { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Category> Category { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Question> Question { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Answer> Answer { get; set; }
    }
}
