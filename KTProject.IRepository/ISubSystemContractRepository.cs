using KTProject.Model;
using System.Collections.Generic;

namespace KTProject.IRepository
{
	public interface ISubSystemContractRepository
	{
		IEnumerable<SubSystemContract> Get(object condition);
	}
}
