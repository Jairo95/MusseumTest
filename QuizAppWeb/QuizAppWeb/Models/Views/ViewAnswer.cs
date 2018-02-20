using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models.Views
{
    public class ViewAnswer
    {
        public int AnswerId { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }
        public int StatusId { get; set; }
        public int QuestionId { get; set; }

        public static implicit operator ViewAnswer(Answer answer)
        {
            return new ViewAnswer
            {
                AnswerId = answer.AnswerId,
                Description = answer.Description,
                Observation = answer.Observation,
                StatusId = answer.StatusId,
                QuestionId = answer.QuestionId
            };
        }

        public static implicit operator Answer(ViewAnswer viewAnswer)
        {
            return new Answer
            {
                AnswerId = viewAnswer.AnswerId,
                Description = viewAnswer.Description,
                Observation = viewAnswer.Observation,
                StatusId = viewAnswer.StatusId,
                QuestionId = viewAnswer.QuestionId
            };
        }
    }
}