using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using KTProject.Repository;
using System;
using System.Collections.Generic;

namespace KTProject.Service
{
    public class ResourceService : IResourceService
    {
        private IResourceRepository repository = new KTResourceRepository();

        public KTResource GetDetail(int id) {
            return repository.GetDetail(id);
        }

        public IEnumerable<KTResource> GetList(int orgid, string filter, int pageIndex, int pageSize, ref int totalCount) {

            var list = repository.GetList(orgid, filter, pageIndex, pageSize, ref totalCount);
            return list;
        }
        public IEnumerable<KTResourceSimpleView> GetList(WorkgroupParams workgroupParams) {
            return repository.GetList(workgroupParams);
        }
        public IEnumerable<KTResource> GetList2(WorkgroupParams workgroupParams) {
            return repository.GetList2(workgroupParams);
        }

        public KTResource Insert(KTResource metadata) {
            return repository.Insert(metadata);
        }

        public int Update(KTResource metadata) {
            return repository.Update(metadata);
        }
        public int Delete(KTResource obj) {
            return repository.Delete(obj);
        }

        public IntID Maxid() {
            return repository.Maxid();
        }
        /// <summary>
        /// 根据UserID，即resource表中的myself字段获取信息
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public KTResource GetDetailByUserid(int userid) {
            return repository.GetDetailByUserid(userid);
        }
    }
}
