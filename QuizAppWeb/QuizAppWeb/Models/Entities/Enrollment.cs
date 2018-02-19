using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class Enrollment
    {
        public int EnrollmentId { get; set; }
        public int UserId { get; set; }
        public int ClassroomId { get; set; }

        public virtual User User { get; set; }
        public virtual Classroom Classroom { get; set; }


    }
}