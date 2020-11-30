using System;

namespace KTProject.Model
{
	[Serializable]
	public class SubSystemContract
	{
		public int Id { get; set; }
		public string SubSystemUniqueCode { get; set; }
		public DateTime? ProbationStartTime { get; set; }
		public DateTime? ProbationEndTime { get; set; }
		public DateTime? ContractStatTime { get; set; }
		public DateTime? ContractEndTime { get; set; }
		public int FreeServiceYears { get; set; }
		public DateTime CreateTime { get; set; }
		public DateTime UpdateTime { get; set; }
		public string OrgId { get; set; }
	}
}

