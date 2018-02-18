using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizAppWeb.Models.Views
{
    public class ViewPerson
    {
        public int PersonId { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Identity { get; set; }
        public string Phone { get; set; }

        public static implicit operator ViewPerson(Person person)
        {
            return new ViewPerson
            {
                PersonId = person.PersonId,
                Name = person.Name,
                LastName = person.LastName,
                Email = person.Email,
                Identity = person.Identity,
                Phone = person.Phone
            };
        }

        public static implicit operator Person(ViewPerson viewPerson)
        {
            return new Person
            {
                PersonId = viewPerson.PersonId,
                Name = viewPerson.Name,
                LastName = viewPerson.LastName,
                Email = viewPerson.Email,
                Identity = viewPerson.Identity,
                Phone = viewPerson.Phone
            };
        }
    }
}