using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using KTProject.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Service
{
    public class IssueService : IIssueService
    {
        private IIssueRepository issueRepository = new IssueRepository();

        public IssueExt GetDetail(int id) {
            return issueRepository.GetDetail(id);
        }

        public IEnumerable<IssueExt> GetList(int userid, int pageIndex, int pageSize, ref int totalCount) {

            var list = issueRepository.GetList(userid, pageIndex, pageSize, ref totalCount);
            return list;
        }
    }
}
