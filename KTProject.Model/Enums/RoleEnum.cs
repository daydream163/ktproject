using System;
using System.ComponentModel;

namespace KTProject.Model
{
	/// <summary>
	/// 系统角色类型
	/// </summary>
	public enum RoleEnum
	{
		/// <summary>
		/// 课题管理员
		/// </summary>
		[Description("kt_customer")]
		None = 0,

		/// <summary>
		/// 课题管理员
		/// </summary>
		[Description("kt_customer")]
		KTCustomer = 1,

		[Description("kt_projectmanager")]
		KTProjectManager = 2,

		[Description("kt_departmentleader")]
		KTDepartmentLeader = 4,
	}
}
