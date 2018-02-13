using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Net.Http.Headers;

namespace QuizAppWeb
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.EnableCors();

            /*// Esto provoca un cambio de etiquetas en json.
            var json = config.Formatters.JsonFormatter;
            json.SerializerSettings.PreserveReferencesHandling =
                Newtonsoft.Json.PreserveReferencesHandling.Objects;
            */
            System.Web.Http.GlobalConfiguration.Configuration.Formatters.XmlFormatter.SupportedMediaTypes.Clear();

            config.Formatters.Remove(config.Formatters.XmlFormatter);
            config.Formatters.Insert(0, new System.Net.Http.Formatting.JsonMediaTypeFormatter());


            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "login",
                routeTemplate: "mt/{controller}/{username}/{password}",
                defaults: new {
                    username = RouteParameter.Optional,
                    password = RouteParameter.Optional
                }
            );
        }
    }
}
