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
    public class IssueRepository : MySqlHelper, IIssueRepository
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        public IssueExt GetDetail(int id) {
            return db.Queryable<IssueExt>()
                .Where((m) => m.id == id.ToString())
                .First();
        }

        public IEnumerable<IssueExt> GetList(int userid, int pageIndex, int pageSize, ref int totalCount) {
            return db.Queryable<Issue, KTResource, KTResource, KTTask>((i, r1, r2, t) => new object[]
            {
                JoinType.Left, i.assignedBy == r1.myself.ToString(),
                JoinType.Left, i.assignedTo == r2.myself.ToString(),
                JoinType.Left, i.task == t.id,
            })
            .Where((i) => (i.ownerx == userid || i.assignedTo == userid.ToString()) && i.task != null)
            .Select((i, r1, r2, t) => new IssueExt {
                id = i.id,
                creationDate = i.creationDate,
                creator = i.creator,
                lastModified = i.lastModified,
                lastModifier = i.lastModifier,
                descriptionx = i.descriptionx,
                gravity = i.gravity,
                jsonData = i.jsonData,
                lastStatusChangeDate = i.lastStatusChangeDate,
                tags = i.tags,
                assignedBy = i.assignedBy,
                assignedTo = i.assignedTo,
                ownerx = i.ownerx,
                statusx = i.statusx,
                taskID = i.task,
                assignedByUserID = r1.myself.ToString(),
                assignedByFullName = r1.name,
                assignedByPhoto = r1.myPhoto,
                assignedToUserID = r2.myself.ToString(),
                assignedToFullName = r2.name,
                assignedToPhoto = r2.myPhoto,
                taskName = t.name,
                taskCode = t.code
            }).ToPageList(pageIndex, pageSize, ref totalCount);
        }
    }
}
