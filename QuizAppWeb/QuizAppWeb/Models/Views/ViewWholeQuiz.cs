using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models.Views
{
    public class ViewWholeQuiz
    {
        public int QuizId { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }
        public int LevelId { get; set; }
        public int ClassroomOwner { get; set; }
        public int Scope { get; set; }
        public List<ViewWholeQuestion> Questions { get; set; }

        public static List<ViewWholeQuestion> fromMyCollectionToList(ICollection<Question> lista)
        {
            List<ViewWholeQuestion> list = new List<ViewWholeQuestion>();
            lista.ToList<Question>().ForEach(delegate (Question question)
            {
                list.Add(question);
            });
            return list;
        }

        public static implicit operator ViewWholeQuiz(Quiz quiz)
        {
            return new ViewWholeQuiz
            {
                QuizId = quiz.QuizId,
                Description = quiz.Description,
                Observation = quiz.Observation,
                LevelId = quiz.LevelId,
                ClassroomOwner = quiz.ClassroomOwner,
                Scope = quiz.Scope,
                Questions = ViewWholeQuiz.fromMyCollectionToList(quiz.Questions)
            };
        }
    }
}