using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models.Views
{
    public class ViewLevel
    {
        public int LevelId { get; set; }
        public string Name { get; set; }
        public string Rank { get; set; }
        public string Description { get; set; }
        public int Time { get; set; }

        public static implicit operator ViewLevel(Level level)
        {
            return new ViewLevel
            {
                LevelId = level.LevelId,
                Name = level.Name,
                Rank = level.Rank,
                Description = level.Description,
                Time = level.Time
            };
        }

        public static implicit operator Level(ViewLevel viewLevel)
        {
            return new Level
            {
                LevelId = viewLevel.LevelId,
                Name = viewLevel.Name,
                Rank = viewLevel.Rank,
                Description = viewLevel.Description,
                Time = viewLevel.Time
            };
        }
    }
}