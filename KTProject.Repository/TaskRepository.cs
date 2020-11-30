using KTProject.Common;
using KTProject.IRepository;
using KTProject.Model;
using KTProject.Repository;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KTApp.Repository
{
    public class TaskRepository : MySqlHelper, ITaskRepository
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        public IEnumerable<KTTask> GetList(int userid, int pageIndex, int pageSize, ref int totalCount) {

            var list = db.Queryable<KTTask>()
            .Where((t) => t.ownerx == userid && t.parent == null)
            .ToPageList(pageIndex, pageSize, ref totalCount);
            return list;
        }

        public  KTTask GetDetail(int id) {
            return null;
        }
    }
}