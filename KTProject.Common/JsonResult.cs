﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Common
{
    public class JsonResult : HttpResponseMessage
    {
        public JsonResult(string text)
        {
            base.Content = new StringContent(text);
            base.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            base.Content.Headers.ContentType.CharSet = "UTF-8";
        }
	}
}
