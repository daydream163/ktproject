using KTProject.Common;
using KTProject.IService;
using KTProject.Model;
using KTProject.Service;
using Microsoft.AspNet.Identity.Owin;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Http;
using System.Web.Security;

namespace KTApp
{
    public class BaseApiController : ApiController
    {
        public IUserService _userService { get; set; }
        public IResourceService _resourceService { get; set; }

        private int _userid = 0;
        private CredentialsExt _userInfo;
        
        public int UserID
        {
            get
            {
                if (_userid == 0 && this.UserInfo != null) {
                    _userid = Convert.ToInt32(UserInfo.UserId);
                    return _userid;
                }
                else {
                    return _userid;
                }
            }
        }

        private KTResource _resourceinfo = null;
        public KTResource ResourceInfo
        {
            get
            {
                if (_resourceinfo == null) {
                    _resourceinfo = _resourceService.GetDetailByUserid(this.UserID);
                    return _resourceinfo;
                }
                else {
                    return _resourceinfo;
                }
            }
        }


        /// <summary>
        /// 角色列表
        /// </summary>
        public string[] Roles
        {
            get
            {
                if (UserInfo.Roles != null) {
                    return UserInfo.Roles.Split(',');
                }
                else {
                    return null;
                }
            }
        }

        public CredentialsExt UserInfo
        {
            get
            {
                if (this._userInfo == null)
                {
                    object obj = System.Web.HttpContext.Current.Session[Constants.IDENDITY_SESSION_NAME];
                    if (obj != null)
                    {
                        _userInfo = (CredentialsExt)obj;
                    }
                    
                    return _userInfo;
                }
                else
                {
                    return _userInfo;
                }
            }
        }

        /// <summary>
        /// 登陆了身份
        /// </summary>
        FormsIdentity AuthIdentity
        {
            get
            {
                IPrincipal principal = System.Web.HttpContext.Current.User;
                if (principal != null) {
                    FormsIdentity formsIdentity = principal.Identity as FormsIdentity;
                    return formsIdentity;
                }
                else {
                    return null;
                }
            }
        }

        public BaseApiController()
        {
        }
    }
}