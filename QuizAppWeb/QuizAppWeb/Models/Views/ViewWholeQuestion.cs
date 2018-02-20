using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models.Views
{
    public class ViewWholeQuestion
    {
        public int QuestionId { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }
        public int QuizId { get; set; }
        public int CategoryId { get; set; }
        public List<ViewAnswer> Answers { get; set; }

        public static List<ViewAnswer> fromMyCollectionToList(ICollection<Answer> lista)
        {
            List<ViewAnswer> list = new List<ViewAnswer>();
            lista.ToList<Answer>().ForEach(delegate (Answer answer)
            {
                list.Add(answer);
            });
            return list;
        }

        public static implicit operator ViewWholeQuestion(Question question)
        {
            return new ViewWholeQuestion
            {
                QuestionId = question.QuestionId,
                Description = question.Description,
                Observation = question.Observation,
                QuizId = question.QuizId,
                CategoryId = question.CategoryId,
                Answers = ViewWholeQuestion.fromMyCollectionToList(question.Answers)
            };
        }
    }
}