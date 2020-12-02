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
    public class IssueStatusService : IIssueStatusService
    {
        private IIssueStatusRepository repository = new IssueStatusRepository();

        public int Delete(IssueStatus obj) {
            return repository.Delete(obj);
        }

        public IssueStatus GetDetail(int id) {
            throw new NotImplementedException();
        }

        public IEnumerable<IssueStatus> GetList(string orgcode) {
            return repository.GetList(orgcode);
        }

        public IssueStatus Insert(IssueStatus obj) {
            return repository.Insert(obj);
        }

        public int Update(IssueStatus obj) {
            return repository.Update(obj);
        }
    }
}
