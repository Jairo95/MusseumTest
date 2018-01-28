using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace QuizAppWeb
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "services/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
