using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class Quiz
    {
        public int QuizId { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }

        
        public int LevelId { get; set; }

        public int ClassroomOwner { get; set; }
        public int Scope { get; set; }

        
        public virtual Level Level { get; set; }

        public virtual ICollection<Question> Questions { get; set; }
        public virtual ICollection<Record> Records { get; set; }
    }
}