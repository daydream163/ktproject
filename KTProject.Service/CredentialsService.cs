using KNet.Core;
using KTProject.Common;
using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using KTProject.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace KTProject.Service
{
	public class CredentialsService : ICredentialsService
	{
		private ICredentialsRepository _credentialsRepository = new CredentialsRepository();

/*		public bool Add(Credentials credentials) {

			string token = MakeToken(deptUser, userIp, GetDid(), "pc", DateTime.Now.AddDays(1), deptUser.FromCode);
			return token;
		}
*/
	}
}
