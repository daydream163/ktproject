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
        private IIssueRepository roleRepository = new IssueRepository();

        public IssueExt GetDetail(int id) {
            return roleRepository.GetDetail(id);
        }

        public IEnumerable<IssueExt> GetList(int userid, int pageIndex, int pageSize, ref int totalCount) {

            var list = roleRepository.GetList(userid, pageIndex, pageSize, ref totalCount);
            return list;
        }
    }
}
