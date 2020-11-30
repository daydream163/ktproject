using System.Web.Mvc;

namespace KTApp.Areas.app
{
    public class appAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "app";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "app_task_Gantt",
                "app/task/{controller}/{action}/{id}",
                new {id = UrlParameter.Optional }
            );
            /*context.MapRoute(
                "app_task",
                "app/task/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );*/
            context.MapRoute(
                "app_issue",
                "app/issue/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
            context.MapRoute(
                "app_default",
                "app/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );

        }
    }
}