using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace BibleBowlStudy
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //routes.MapRoute(
            //    name: "mvc",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //);

            // This is a catch-all for when no other routes match the request; let the Angular 2 router take care of it...
            routes.MapRoute(
                name: "default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" } // The view that bootstraps Angular 2 app
            );
        }
    }
}
