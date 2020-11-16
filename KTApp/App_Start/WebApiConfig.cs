using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace KTApp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API 配置和服务

            // Web API 路由
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi2",
                routeTemplate: "{controller}/{action}",
                defaults: new {}
            );
            config.Routes.MapHttpRoute(
                name: "portalApi",
                routeTemplate: "portal/{controller}/{action}/{id}",
                defaults: new { action = "Get", id = RouteParameter.Optional }
            );
            /*config.Routes.MapHttpRoute(
                name: "partsApi",
                routeTemplate: "parts/{controller}/{action}/{cm}",
                defaults: new { cm = RouteParameter.Optional }
            );*/

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            /*config.MapHttpAttributeRoutes();
                config.Routes.MapHttpRoute(
                name: "DefaultApi2",
                routeTemplate: "{controller}/{action}",
                defaults: new { controller = "Home", action = "Index" }
            );*/

            /*config.MapHttpAttributeRoutes();
                config.Routes.MapHttpRoute(
                name: "DefaultApi2",
                routeTemplate: "{controller}/{action}/{code}/{fill}/{stroke}",
                defaults: new { controller = "Home", action = "Index", fill = RouteParameter.Optional, stroke = RouteParameter.Optional }
            );*/

        }
    }
}
