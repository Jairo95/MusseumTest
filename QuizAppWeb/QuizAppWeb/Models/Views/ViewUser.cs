using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models.Views
{
    public class ViewUser
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public int PersonId { get; set; }
        public int RolId { get; set; }

        public static implicit operator ViewUser(User user)
        {
            return new ViewUser
            {
                UserId = user.UserId,
                Username = user.Username,
                Password = user.Password,
                PersonId = user.PersonId,
                RolId = user.RolId
            };
        }
    }
}