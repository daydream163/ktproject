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

        /// <summary>
        /// 查询资源
        /// </summary>
        /// <param name="orgid">areaid？？</param>
        /// <param name="filter"></param>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <param name="totalCount"></param>
        /// <returns></returns>
        public IEnumerable<KTResource> GetList(int orgid, string filter, int pageIndex, int pageSize, ref int totalCount) {
            // TODO 获取机构下信息
            return db.Queryable<KTResource>()
                .WhereIF(orgid != 0, (r) => r.area == orgid)
                .WhereIF(!string.IsNullOrEmpty(filter),
                (r) => r.name.Contains(filter)
                    || r.personName.Contains(filter)
                    || r.personSurname.Contains(filter))
                .ToPageList(pageIndex, pageSize, ref totalCount);
        }

        public IEnumerable<DepartmentType> GetDepartmentTypeList(string orgid) {
            // TODO 获取机构下信息
            return db.Queryable<DepartmentType>().ToList();
        }

        public DepartmentType InsertDepartmentType(DepartmentType obj) {
            return db.Insertable<DepartmentType>(obj).ExecuteReturnEntity();
        }
        public KTResource Insert(KTResource obj) {
            return db.Insertable<KTResource>(obj).ExecuteReturnEntity();
        }

        public int Update(KTResource obj) {
            return db.Updateable<KTResource>(obj)
                .Where(m => m.id == obj.id)
                .ExecuteCommand();
        }
        public int Delete(KTResource obj) {
            return db.Deleteable<KTResource>(m => m.id == obj.id).ExecuteCommand();
        }

        public IntID Maxid() {
            return db.SqlQueryable<IntID>("select max(id + 0) + 1 as id from twk_resource").ToList().First<IntID>();
        }

        public KTResource GetDetailByUserid(int userid) {
            return db.Queryable<KTResource>()
                .Where((m) => m.myself == userid)
                .First();
        }

        public IEnumerable<KTResourceSimpleView> GetList(WorkgroupParams workgroupParams) {
            // TODO 获取机构下信息
            return db.Queryable<KTResource>()
                .WhereIF(!string.IsNullOrWhiteSpace(workgroupParams.PEOPLE), (r) => r.name.Contains(workgroupParams.PEOPLE.Trim())
                || r.code.Contains(workgroupParams.PEOPLE.Trim())
                || r.courtesyTitle.Contains(workgroupParams.PEOPLE.Trim()))
                .WhereIF(!string.IsNullOrWhiteSpace(workgroupParams.DEPARTMENT),
                (r) => r.parent == workgroupParams.DEPARTMENT
                    || r.ancestorids.Contains(workgroupParams.DEPARTMENT + "^"))
                .WhereIF(workgroupParams.HAVE_LOGIN, (r) => r.myself != null)
                .Where((r) => r.discriminator == "PERSON" && r.hidden == false)
                .Select<KTResourceSimpleView>("id,lastModifier,lastModified,creationDate,area,location,name,myphoto")
                .ToList();
        }
        public IEnumerable<KTResource> GetList2(WorkgroupParams workgroupParams) {
            // TODO 获取机构下信息
            return db.Queryable<KTResource>()
                .WhereIF(!string.IsNullOrWhiteSpace(workgroupParams.PEOPLE), (r) => r.name.Contains(workgroupParams.PEOPLE.Trim())
                || r.code.Contains(workgroupParams.PEOPLE.Trim())
                || r.courtesyTitle.Contains(workgroupParams.PEOPLE.Trim()))
                .WhereIF(!string.IsNullOrWhiteSpace(workgroupParams.DEPARTMENT),
                (r) => r.parent == workgroupParams.DEPARTMENT
                    || r.ancestorids.Contains(workgroupParams.DEPARTMENT + "^"))
                .WhereIF(workgroupParams.HAVE_LOGIN, (r) => r.myself != null)
                .Where((r) => r.discriminator == "PERSON" && r.hidden == false)
                .ToList();
        }
    }
}
