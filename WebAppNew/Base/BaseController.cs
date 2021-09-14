using KTProject.Common;
using KTProject.IService;
using KTProject.Model;
using KTProject.Service;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace KTApp
{
    public class BaseController : Controller
    {
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

        /// <summary>
        /// 角色列表
        /// </summary>
        public string[] Roles
        {
            get
            {
                if (this.UserInfo != null) {
                    return UserInfo.Roles.Split(',');
                }
                else
                {
                    return null;
                }
            }
        }

        CredentialsExt UserInfo
        {
            get
            {
                if (this._userInfo == null) {
                    _userInfo = (CredentialsExt)System.Web.HttpContext.Current.Session[Constants.IDENDITY_SESSION_NAME];
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
                IPrincipal principal = System.Web.HttpContext.Current.User as IPrincipal;
                if (principal != null) {
                    FormsIdentity formsIdentity = (FormsIdentity)principal.Identity;
                    return formsIdentity;
                }
                else {
                    return null;
                }
            }
        }
        /// <summary>
        /// 登陆了身份
        /// </summary>
        int UnReadMsgCount
        {
            get
            {
                IMessageService messageService = new MessageService();
                return messageService.GetUnReadCount(this.UserID);
            }
        }




        public BaseController() {
            ViewBag.UserInfo = UserInfo;
            ViewBag.UnReadMsgCount = this.UnReadMsgCount;
        }
    }
}