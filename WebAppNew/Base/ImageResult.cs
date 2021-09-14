using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace KTApp.Base
{
    public class ImageResult : ActionResult
    {
        public Image imageData;
        public ImageResult(Image image)
        {
            imageData = image;
        }

        public override void ExecuteResult(ControllerContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException();
            }
            HttpResponseBase response = context.HttpContext.Response;

            response.ContentType = "image/svg+xml";
            imageData.Save(context.HttpContext.Response.OutputStream, ImageFormat.Png);
        }
    }
}