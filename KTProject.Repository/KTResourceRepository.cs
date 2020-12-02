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
    public class KTResourceRepository : MySqlHelper, IResourceRepository
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        public KTResource GetDetail(int id) {
            return db.Queryable<KTResource>()
                .Where((m) => m.id == id.ToString())
                .First();
        }

        public IEnumerable<KTResource> GetList(int orgid, int pageIndex, int pageSize, ref int totalCount) {
            // TODO 获取机构下信息
            return db.Queryable<KTResource>().ToPageList(pageIndex, pageSize, ref totalCount);
        }

        public IEnumerable<DepartmentType> GetDepartmentTypeList(string orgid) {
            // TODO 获取机构下信息
            return db.Queryable<DepartmentType>().ToList();
        }
        public DepartmentType InsertDepartmentType(DepartmentType obj) {
            return db.Insertable<DepartmentType>(obj).ExecuteReturnEntity();
        }

    }
}
