using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models.Views
{
    public class ViewClassroom
    {
        public int ClassroomId { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }
        public int UserCreate { get; set; }
        public int UserManager { get; set; }

        public static implicit operator ViewClassroom(Classroom classroom)
        {
            return new ViewClassroom
            {
                ClassroomId = classroom.ClassroomId,
                Name = classroom.Name,
                Password = classroom.Password,
                Description = classroom.Description,
                Observation = classroom.Observation,
                UserCreate = classroom.UserCreate,
                UserManager = classroom.UserManager
            };
        }
    }


}