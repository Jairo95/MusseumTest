using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models.Views
{
    public class ViewStatus
    {
        public int StatusId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public static implicit operator ViewStatus(Status status)
        {
            return new ViewStatus
            {
                StatusId = status.StatusId,
                Name = status.Name,
                Description = status.Description
            };
        }

        public static implicit operator Rol(ViewStatus viewStatus)
        {
            return new ViewStatus
            {
                StatusId = viewStatus.StatusId,
                Name = viewStatus.Name,
                Description = viewStatus.Description
            };
        }
    }
}