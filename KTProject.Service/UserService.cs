using KTProject.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Service
{
    public class UserService : IUserService
	{
        public HttpResponseMessage GetUserLogo(string realName, string rectFill, string textFill)
        {
			return CreateUserLogo(realName, rectFill, textFill);
		}

		/*private HttpResponseMessage CreateUserLogo(string userid)
		{
			// 根据ID获取真实头像，并返回
			var name = GetShowName(userid);
			var httpResponseMessage = new HttpResponseMessage(HttpStatusCode.OK)
			{
				Content = new StringContent(
				$"<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 500 500\" enable-background=\"new 0 0 500 500\" xml:space=\"preserve\" height=\"500px\" width=\"500px\"><rect width=\"500\" height=\"500\" fill=\"#{rectFill}\"/><text x=\"50%\" y=\"50%\" dy=\".3em\" font-family=\"sans-serif\" font-size=\"220px\" text-anchor=\"middle\" fill=\"#{textFill}\">{name}</text></svg>", Encoding.UTF8)
			};
			httpResponseMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("image/svg+xml");
			httpResponseMessage.Content.Headers.ContentType.CharSet = "UTF-8";
			return httpResponseMessage;
		}*/

		private HttpResponseMessage CreateUserLogo(string realName, string rectFill, string textFill)
		{
			var name = realName;
			var httpResponseMessage = new HttpResponseMessage(HttpStatusCode.OK)
			{
				Content = new StringContent(
				$"<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 500 500\" enable-background=\"new 0 0 500 500\" xml:space=\"preserve\" height=\"500px\" width=\"500px\"><rect width=\"500\" height=\"500\" fill=\"#{rectFill}\"/><text x=\"50%\" y=\"50%\" dy=\".3em\" font-family=\"sans-serif\" font-size=\"220px\" text-anchor=\"middle\" fill=\"#{textFill}\">{name}</text></svg>", Encoding.UTF8)
			};
			httpResponseMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("image/svg+xml");
			httpResponseMessage.Content.Headers.ContentType.CharSet = "UTF-8";
			return httpResponseMessage;
		}

		private object GetShowName(string realName)
		{
			// TODO 获取真实姓名
			return realName;
		}
	}
}
