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
    public class DepartmentTypeRepository : MySqlHelper, IDepartmentTypeRepository
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        public int Delete(DepartmentType obj) {
            return db.Deleteable<Metadata>(m => m.id == obj.id).ExecuteCommand();
        }

        public DepartmentType GetDetail(int id) {
            throw new NotImplementedException();
        }

        public IEnumerable<DepartmentType> GetList(int userid, int pageIndex, int pageSize, ref int totalCount) {
            return db.Queryable<DepartmentType>().ToPageList(pageIndex, pageSize, ref totalCount);
        }

        public IEnumerable<DepartmentType> GetList(string orgcode) {
            return db.Queryable<DepartmentType>().ToList();
        }

        public DepartmentType Insert(DepartmentType obj) {
            return db.Insertable<DepartmentType>(obj).ExecuteReturnEntity();
        }

        public int Update(DepartmentType obj) {
            return db.Updateable<Metadata>(obj)
                .Where(m => m.id == obj.id)
                .ExecuteCommand();
        }
    }
}
