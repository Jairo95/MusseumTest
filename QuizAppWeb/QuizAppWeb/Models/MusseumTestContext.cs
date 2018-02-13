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

        public DbSet<Rol> Rols { get; set; }
        public DbSet<Person> People { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ViewCategory> Category { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Classroom> Classrooms { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Login> Logins { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Record> Records { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.LogAnswer> LogAnswers { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Quiz> Quizs { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Status> Status { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Level> Levels { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Category> Categories { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Question> Questions { get; set; }

        public System.Data.Entity.DbSet<QuizAppWeb.Models.Answer> Answers { get; set; }
    }
}
