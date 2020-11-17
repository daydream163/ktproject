using KTProject.Common;
using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using System;
using System.Linq;

namespace KTProject.Service
{
	public class SubSystemContractService : ISubSystemContractService
	{
		public ISubSystemContractRepository _iSubSystemContractRepository { get; set; }
		
		public SubSystemContract Get(string orgId)
		{
			var ktContract = new SubSystemContract();
			var cacheKey = string.Format(RedisCacheKey.KtSubsystemContract, orgId);
			ktContract = CacheHelper.GetCache<SubSystemContract>(cacheKey);
			if (ktContract == null)
			{
				ktContract = _iSubSystemContractRepository.Get(new { OrgId = orgId, SubSystemUniqueCode = "subject" }).FirstOrDefault();
				if (ktContract != null)
				{
					// 线上时间延至2小时
					CacheHelper.AddCache(cacheKey, ktContract, DateTime.Now.AddHours(2));
				}
			}
			return ktContract;
		}
	}
}
