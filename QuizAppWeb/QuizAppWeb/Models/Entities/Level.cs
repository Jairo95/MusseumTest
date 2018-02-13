using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class Level
    {
        public int LevelId { get; set; }
        public string Name { get; set; }
        public string Rank { get; set; }
        public string Description { get; set; }
        public int Time { get; set; }

        public virtual ICollection<Quiz> Quizzes { get; set; }
    }
}