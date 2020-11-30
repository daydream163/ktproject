using KTProject.Common;
using KTProject.Common.DapperExtensions;
using KTProject.IRepository;
using KTProject.Model;
using System.Collections.Generic;

namespace KTProject.Repository
{
	public class SubSystemContractRepository : DbConnection, ISubSystemContractRepository
	{
		public IEnumerable<SubSystemContract> Get(object condition)
		{
			using (var connection = GetConfigConnection())
			{
				return connection.QueryList<SubSystemContract>(condition, Constants.CoSubSystemContract);
			}
		}
	}
}
