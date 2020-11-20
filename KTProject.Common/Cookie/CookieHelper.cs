using System;
using System.Web;

namespace KTProject.Common
{
	public class CookieHelper
	{
		/// <summary>
		/// 添加key=token
		/// </summary>
		/// <param name="ctx"></param>
		/// <param name="token"></param>
		/// <returns></returns>
		public static bool AddCookie(string key, string value, DateTime? expire)
		{
			HttpCookie hc = new HttpCookie(key, value);

			if (!string.IsNullOrEmpty(Constants.SSO_DOMAIN_NAME))
				hc.Domain = Constants.SSO_DOMAIN_NAME;

			if (expire.HasValue && expire.Value > DateTime.Now)
				hc.Expires = expire.Value;
			HttpContext.Current.Response.Cookies.Add(hc);
			return true;
		}

		public static bool AddCookie(string key, string value, DateTime? expire,bool local)
		{
			HttpCookie hc = new HttpCookie(key, value);
            if (local)
            {
				if (expire.HasValue && expire.Value > DateTime.Now)
					hc.Expires = expire.Value;
				HttpContext.Current.Response.Cookies.Add(hc);
				return true;
			}
			if (!string.IsNullOrEmpty(Constants.SSO_DOMAIN_NAME))
				hc.Domain = Constants.SSO_DOMAIN_NAME;

			if (expire.HasValue && expire.Value > DateTime.Now)
				hc.Expires = expire.Value;
			HttpContext.Current.Response.Cookies.Add(hc);
			return true;
		}

		/// <summary>
		/// 获取特定key的值cookie值
		/// </summary>
		/// <returns></returns>
		public static string GetCookieByKey(string key)
		{
			string token = string.Empty;
			var hc = HttpContext.Current.Request.Unvalidated.Cookies[key];

			if (hc != null && hc.Value != null && (token = hc.Value.Trim()).Length > 0)
				return token;

			//如果cookie中未获取到，则尝试从URL中获取
			if (HttpContext.Current.Request != null && HttpContext.Current.Request.QueryString != null)
				token = HttpContext.Current.Request.QueryString[key];

			//如果URL也没有，则尝试从Form中获取
			if (string.IsNullOrEmpty(token) && HttpContext.Current.Request != null && HttpContext.Current.Request.Form != null)
				token = HttpContext.Current.Request.Form[key];

			if (string.IsNullOrEmpty(token))
				return string.Empty;

			return token.Trim();
		}

		/// <summary>
		/// 移除cookie
		/// </summary>
		/// <param name="key"></param>
		public static void ClearCookie(string key)
		{
			var hc = new HttpCookie(key, string.Empty);

			if (!string.IsNullOrEmpty(Constants.SSO_DOMAIN_NAME))
				hc.Domain = Constants.SSO_DOMAIN_NAME;
			hc.Expires = DateTime.Now.AddDays(-1);
			System.Web.HttpContext.Current.Response.Cookies.Add(hc);
		}
	}
}