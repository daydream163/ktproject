using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using KTProject.Repository;
using System.Collections.Generic;

namespace KTProject.Service
{
    public class ResourceService : IResourceService
    {
        private IResourceRepository repository = new KTResourceRepository();

        public KTResource GetDetail(int id) {
            return repository.GetDetail(id);
        }

        public IEnumerable<KTResource> GetList(int orgid, int pageIndex, int pageSize, ref int totalCount) {

            var list = repository.GetList(orgid, pageIndex, pageSize, ref totalCount);
            return list;
        }

        /*public IEnumerable<DepartmentType> GetDepartmentTypeList(string orgid) {
            return repository.GetDepartmentTypeList(orgid);
        }*/
    }
}
