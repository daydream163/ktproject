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
    public class MessageRepository : MySqlHelper, IMessageRepository 
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        public Message GetDetail(int userid, int id) {
            return db.Queryable<Message>()
                .Where((m) => m.toOperator == userid && m.id == id)
                .First();
        }

        public IEnumerable<Message> GetList(int userid, int pageIndex, int pageSize, ref int totalCount) {
            return db.Queryable<Message>()
            .Where((m) => m.toOperator == userid)
            .ToPageList(pageIndex, pageSize, ref totalCount);
        }

        public int GetUnReadCount(int userid) {
            return db.Queryable<Message>()
            .Where((m) => m.toOperator == userid && m.readOn == null)
            .Count();
        }
    }
}
