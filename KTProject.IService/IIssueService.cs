using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IService
{
    public interface IIssueService
    {
        IEnumerable<IssueExt> GetList(int userid, int pageIndex, int pageSize, ref int totalCount);
        IssueExt GetDetail(int id);
    }
}
