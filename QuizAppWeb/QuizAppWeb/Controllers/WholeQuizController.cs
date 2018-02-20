using QuizAppWeb.Models;
using QuizAppWeb.Models.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace QuizAppWeb.Controllers
{
    public class WholeQuizController : ApiController
    {
        private MusseumTestContext db = new MusseumTestContext();

        [HttpGet]
        [Route("api/Quizs/Maped/{QuizId}")]
        public ViewWholeQuiz GetWholeQuiz(int QuizId)
        {
            ViewWholeQuiz listViewWholeQuiz = new ViewWholeQuiz();
            var quiz = db.Quiz.Find(QuizId);
            listViewWholeQuiz = quiz;
            return listViewWholeQuiz;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
