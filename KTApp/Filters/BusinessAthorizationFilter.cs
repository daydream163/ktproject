using Autofac;
using Autofac.Integration.WebApi;
using KTProject.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace KTApp
{
    public class BusinessAthorizationFilterAttribute : ActionFilterAttribute
    {
		ISubSystemContractService _iSubSystemContractService = GlobalConfiguration.Configuration.DependencyResolver.GetRootLifetimeScope().Resolve<ISubSystemContractService>();

		/// <summary>
		/// 机构是否授权
		/// </summary>
		/// <param name="actionContext"></param>
		public override void OnActionExecuting(HttpActionContext actionContext) {
			//如果Action带有AllowAnonymousAttribute，则不进行登录验证
			if (actionContext.ControllerContext.ControllerDescriptor.GetCustomAttributes<AllowAnonymousAttribute>().Any() || actionContext.ActionDescriptor.GetCustomAttributes<AllowAnonymousAttribute>().Any()) {
				return;
			}

			ApplicationIdentity identity = System.Web.HttpContext.Current.User.Identity as ApplicationIdentity;

		}
	}
}