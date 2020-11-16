using KTProject.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace KTApp.Base
{
    public class BaseApiController : ApiController
    {
        public IUserService _userService { get; set; }

        public BaseApiController()
        {

        }
    }
}