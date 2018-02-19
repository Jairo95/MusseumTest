using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models.Views
{
    public class ViewQuestion
    {
        public int QuestionId { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }
        public int QuizId { get; set; }
        public int CategoryId { get; set; }

        public static implicit operator ViewQuestion(Question question)
        {
            return new ViewQuestion
            {
                QuestionId = question.QuestionId,
                Description = question.Description,
                Observation = question.Observation,
                QuizId = question.QuizId,
                CategoryId = question.CategoryId
            };
        }

        public static implicit operator Question(ViewQuestion viewQuestion)
        {
            return new Question
            {
                QuestionId = viewQuestion.QuestionId,
                Description = viewQuestion.Description,
                Observation = viewQuestion.Observation,
                QuizId = viewQuestion.QuizId,
                CategoryId = viewQuestion.CategoryId
            };
        }
    }
}