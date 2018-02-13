using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace QuizAppWeb.Models.Views
{
    public class ViewLogin
    {
        [Key]
        public int LoginId { get; set; }
        public string Rol { get; set; }
        public string Status { get; set; }
        public double TimeOut { get; set; }
        public DateTime DateLogin { get; set; }
        public DateTime DateLogout { get; set; }

        public int UserId { get; set; }
        public int ClassroomId { get; set; }

        public static implicit operator ViewLogin(Login login)
        {
            return new ViewLogin
            {
                LoginId = login.LoginId,
                Rol = login.Rol,
                Status = login.Status,
                TimeOut = login.TimeOut,
                DateLogin = login.DateLogin,
                DateLogout = login.DateLogout,
                UserId = login.UserId,
                ClassroomId = login.ClassroomId
            };
        }

        public static implicit operator Login(ViewLogin viewLogin)
        {
            return new ViewLogin
            {
                LoginId = viewLogin.LoginId,
                Rol = viewLogin.Rol,
                Status = viewLogin.Status,
                TimeOut = viewLogin.TimeOut,
                DateLogin = viewLogin.DateLogin,
                DateLogout = viewLogin.DateLogout,
                UserId = viewLogin.UserId,
                ClassroomId = viewLogin.ClassroomId
            };
        }


    }
}