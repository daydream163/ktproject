using KTProject.IService;
using KTProject.Model;
using KTProject.Service;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Http;
using System.Web.Security;

namespace KTApp.Base
{
    public class BaseApiController : ApiController
    {
        public IUserService _userService { get; set; }

        private int _userid = 0;
        public int UserID
        {
            get
            {
                if (_userid == 0) {
                    _userid = Convert.ToInt32(UserInfo.UserId);
                    return _userid;
                }
                else {
                    return _userid;
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
                if (this.AuthIdentity == null) {
                    return null;
                }
                FormsAuthenticationTicket ticket = this.AuthIdentity.Ticket;
                CredentialsExt userInfo = JsonConvert.DeserializeObject<CredentialsExt>(ticket.UserData);
                if (userInfo.Roles != null) {
                    return userInfo.Roles.Split(',');
                }
                else {
                    return null;
                }
            }
        }

        CredentialsExt UserInfo
        {
            get
            {
                if (this.AuthIdentity == null) {
                    return null;
                }
                FormsAuthenticationTicket ticket = this.AuthIdentity.Ticket;
                return JsonConvert.DeserializeObject<CredentialsExt>(ticket.UserData);
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