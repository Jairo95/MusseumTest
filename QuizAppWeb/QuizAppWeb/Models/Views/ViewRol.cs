using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models.Views
{
    public class ViewRol
    {
        public int RolId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Observation { get; set; }

        public static implicit operator ViewRol(Rol rol)
        {
            return new ViewRol
            {
                RolId = rol.RolId,
                Name = rol.Name,
                Description = rol.Description,
                Observation = rol.Observation
            };
        }

        public static implicit operator Rol(ViewRol viewRol)
        {
            return new ViewRol
            {
                RolId = viewRol.RolId,
                Name = viewRol.Name,
                Description = viewRol.Description,
                Observation = viewRol.Observation
            };
        }
    }
}