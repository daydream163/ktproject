using System;
using System.Linq;
using System.Text;

namespace KTProject.Model
{
    ///<summary>
    ///登录凭证
    ///</summary>
    public partial class ab_credentials
    {
           public ab_credentials(){


           }
           /// <summary>
           /// Desc:用户ID
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string UserId {get;set;}

           /// <summary>
           /// Desc:登录部门代码
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string DeptCode {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:False
           /// </summary>           
           public int Id {get;set;}

           /// <summary>
           /// Desc:密码
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string password {get;set;}

           /// <summary>
           /// Desc:用户名
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string UserName {get;set;}

           /// <summary>
           /// Desc:登录部门名称
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string DeptName {get;set;}

           /// <summary>
           /// Desc:最后活动时间
           /// Default:
           /// Nullable:True
           /// </summary>           
           public DateTime? LastValidTime {get;set;}

           /// <summary>
           /// Desc:经纬度
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string location {get;set;}

           /// <summary>
           /// Desc:用户昵称
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string NickName {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Did {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string FromCode {get;set;}

           /// <summary>
           /// Desc:时间戳
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string timestamp {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string RealName {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string HostIp {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string FromName {get;set;}

           /// <summary>
           /// Desc:access_token的首次时间
           /// Default:
           /// Nullable:True
           /// </summary>           
           public DateTime? posttime {get;set;}

           /// <summary>
           /// Desc:机构ID
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string OrgId {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string UserIp {get;set;}

           /// <summary>
           /// Desc:源系统的token
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string FromToken {get;set;}

           /// <summary>
           /// Desc:appid
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string appid {get;set;}

           /// <summary>
           /// Desc:
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string OrgCode {get;set;}

           /// <summary>
           /// Desc:
           /// Default:b'1'
           /// Nullable:True
           /// </summary>           
           public bool? Enabled {get;set;}

           /// <summary>
           /// Desc:角色
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Roles {get;set;}

           /// <summary>
           /// Desc:权限范围
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string scope {get;set;}

           /// <summary>
           /// Desc:登录类型
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string accesstoken {get;set;}

           /// <summary>
           /// Desc:机构名称
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string OrgName {get;set;}

           /// <summary>
           /// Desc:过期时间
           /// Default:
           /// Nullable:True
           /// </summary>           
           public DateTime? ExpireTime {get;set;}

           /// <summary>
           /// Desc:登录类型
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string logintype {get;set;}

           /// <summary>
           /// Desc:登录的平台 app | pc
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string Platform {get;set;}

           /// <summary>
           /// Desc:登录部门ID
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string DeptId {get;set;}

           /// <summary>
           /// Desc:创建时间
           /// Default:
           /// Nullable:True
           /// </summary>           
           public DateTime? CreateTime {get;set;}

           /// <summary>
           /// Desc:刷新码
           /// Default:
           /// Nullable:True
           /// </summary>           
           public string refreshtoken {get;set;}

    }
}
