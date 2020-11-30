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
    public class DocumentRepository : MySqlHelper, IDocumentRepository
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        public DocumentExt GetDetail(int id) {
            return db.Queryable<DocumentExt>()
                .Where((m) => m.id == id.ToString())
                .First();
        }

        public IEnumerable<DocumentExt> GetList(int userid, int pageIndex, int pageSize, ref int totalCount) {
            return db.Queryable<Document, KTTask>((d, t) => new object[]
            {
                JoinType.Left, d.task == t.id,
            })
            .Where((d) => d.ownerx == userid)
            .Select((d, t) => new DocumentExt {
                id = d.id,
                discriminator = d.discriminator,
                creator = d.creator,
                lastModified = d.lastModified,
                lastModifier = d.lastModifier,
                tags = d.tags,
                ownerx = d.ownerx,
                name = d.name,
                task = d.task,
                taskid = t.id,
                taskname = t.name,
                taskcode = t.code,
                creationDate = d.creationDate
            }).ToPageList(pageIndex, pageSize, ref totalCount);
        }
    }
}
