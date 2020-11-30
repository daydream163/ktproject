using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KTApp.Base
{
    public class MyViewEngine : RazorViewEngine
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ViewEngine"/> class.
        /// </summary>
        public MyViewEngine() {
            var views = new[]
            {
                 //"~/Areas/app/Views/Task/{1}/{0}.cshtml",
                 "~/Areas/app/Views/Task/{1}/{0}.cshtml",
             };

            this.PartialViewLocationFormats = views;

            this.ViewLocationFormats = views;
        }

        /// <summary>
        /// 添加视图规则
        /// </summary>
        /// <param name="viewEngineCollection">viewEngineCollection</param>
        internal static void RegisterView(ViewEngineCollection viewEngineCollection) {
            viewEngineCollection.Add(new MyViewEngine());
        }
    }
}