using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models.Views
{
    public class ViewRecord
    {
        public int RecordId { get; set; }
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public double Grade { get; set; }
        public int UserId { get; set; }
        public int QuizId { get; set; }

        public static implicit operator ViewRecord(Record record)
        {
            return new ViewRecord
            {
                RecordId = record.RecordId,
                DateStart = record.DateStart,
                DateEnd = record.DateEnd,
                Grade = record.Grade,
                UserId = record.UserId,
                QuizId = record.QuizId
            };
        }

        public static implicit operator Record(ViewRecord viewRecord)
        {
            return new Record
            {
                RecordId = viewRecord.RecordId,
                DateStart = viewRecord.DateStart,
                DateEnd = viewRecord.DateEnd,
                Grade = viewRecord.Grade,
                UserId = viewRecord.UserId,
                QuizId = viewRecord.QuizId
            };
        }
    }
}