using KTProject.Model;
using System.Collections.Generic;

namespace KTProject.IService
{
	public interface ISubSystemContractService
	{
		SubSystemContract Get(string orgId);
	}
}