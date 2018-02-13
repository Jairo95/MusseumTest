using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models
{
    public class MTException: Exception
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
    }
}