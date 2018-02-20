using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models.Views
{
    public class ViewQuiz
    {
        public int QuizId { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }
        public int LevelId { get; set; }
        public int ClassroomOwner { get; set; }
        public int Scope { get; set; }

        public static implicit operator ViewQuiz(Quiz quiz)
        {
            return new ViewQuiz
            {
                QuizId = quiz.QuizId,
                Description = quiz.Description,
                Observation = quiz.Observation,
                LevelId = quiz.LevelId,
                ClassroomOwner = quiz.ClassroomOwner,
                Scope = quiz.Scope
            };
        }

        public static implicit operator Quiz(ViewQuiz viewQuiz)
        {
            return new Quiz
            {
                QuizId = viewQuiz.QuizId,
                Description = viewQuiz.Description,
                Observation = viewQuiz.Observation,
                LevelId = viewQuiz.LevelId,
                ClassroomOwner = viewQuiz.ClassroomOwner,
                Scope = viewQuiz.Scope
            };
        }
    }
}