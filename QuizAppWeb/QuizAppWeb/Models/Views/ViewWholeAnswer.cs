using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QuizAppWeb.Models.Views;

namespace QuizAppWeb.Models.Views
{
    public class ViewWholeAnswer
    {
        public int AnswerId { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }
        public int StatusId { get; set; }
        public int QuestionId { get; set; }
        public ViewStatus Status { get; set; }

        public static implicit operator ViewWholeAnswer(Answer answer)
        {
            return new ViewWholeAnswer
            {
                AnswerId = answer.AnswerId,
                Description = answer.Description,
                Observation = answer.Observation,
                StatusId = answer.StatusId,
                QuestionId = answer.QuestionId,
                Status = answer.Status
            };
        }
    }
}