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
            Quiz quiz = db.Quiz.Where(quizSeek => quizSeek.ClassroomOwner == QuizId).FirstOrDefault();
            try
            {
                listViewWholeQuiz = quiz;
            }
            catch
            {
                return listViewWholeQuiz;
            }
           
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
