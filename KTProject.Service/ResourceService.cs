using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using KTProject.Repository;
using System.Collections.Generic;

namespace KTProject.Service
{
    public class ResourceService : IResourceService
    {
        private IResourceRepository roleRepository = new KTResourceRepository();

        public KTResource GetDetail(int id) {
            return roleRepository.GetDetail(id);
        }

        public IEnumerable<KTResource> GetList(int orgid, int pageIndex, int pageSize, ref int totalCount) {

            var list = roleRepository.GetList(orgid, pageIndex, pageSize, ref totalCount);
            return list;
        }
    }
}
