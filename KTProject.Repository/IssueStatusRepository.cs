using KTProject.Common;
using KTProject.IRepository;
using KTProject.Model;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Repository
{
    public class IssueStatusRepository : MySqlHelper, IIssueStatusRepository
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        public int Delete(IssueStatus obj) {
            return db.Deleteable<IssueStatus>(m => m.id == obj.id).ExecuteCommand();
        }

        public IssueStatus GetDetail(int id) {
            throw new NotImplementedException();
        }

        public IEnumerable<IssueStatus> GetList(string orgcode) {
            return db.Queryable<IssueStatus>().ToList();
        }

        public IEnumerable<IssueStatus> GetList(int userid, int pageIndex, int pageSize, ref int totalCount) {
            throw new NotImplementedException();
        }

        public IssueStatus Insert(IssueStatus obj) {
            return db.Insertable<IssueStatus>(obj).ExecuteReturnEntity();
        }

        public int Update(IssueStatus obj) {
            return db.Updateable<IssueStatus>(obj)
                .Where(m => m.id == obj.id)
                .ExecuteCommand();
        }
    }
}
