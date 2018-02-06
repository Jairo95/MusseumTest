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

            config.EnableCors();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "services/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "login",
                routeTemplate: "musseum/{controller}/{username}/{password}",
                defaults: new {
                    username = RouteParameter.Optional,
                    password = RouteParameter.Optional
                }
            );
        }
    }
}
