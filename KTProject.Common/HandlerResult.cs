using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Common
{
    public class HandlerResult
    {
		/// <summary>
		/// 状态码 OK:200 ,失败:500
		/// </summary>
		public HttpStatusCode Code { get; set; }

		/// <summary>
		/// 响应的数据
		/// </summary>
		public Object Data { get; set; }

		/// <summary>
		/// 错误信息
		/// </summary>
		public string Error { get; set; }

		/// <summary>
		/// 其他
		/// </summary>
		public Object Other { get; set; }

		/// <summary>
		/// 扩展信息
		/// </summary>
		public Object Extension { get; set; }

		public long Total { get; set; }


		public HandlerResult(HttpStatusCode code, Object data)
		{
			Code = code;
			Data = data;
		}

		public HandlerResult(HttpStatusCode code, Object data, string error)
		{
			Code = code;
			Data = data;
			Error = error;
		}

		public HandlerResult(HttpStatusCode code, Object data, object other)
		{
			Code = code;
			Data = data;
			Other = other;
		}

		public HandlerResult(HttpStatusCode code, Object data, object other, string error)
		{
			Code = code;
			Data = data;
			Other = other;
			Error = error;
		}

		public HandlerResult(HttpStatusCode code, Object data, object other, object extension, string error)
		{
			Code = code;
			Data = data;
			Other = other;
			Extension = extension;
			Error = error;
		}

		public HandlerResult(HttpStatusCode code, Object data, object other, object extension, string error, long total)
		{
			Code = code;
			Data = data;
			Other = other;
			Extension = extension;
			Error = error;
			Total = total;
		}

	}
}
