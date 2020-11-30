using KTApp.Repository;
using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using KTProject.Repository;
using System.Collections.Generic;

namespace KTProject.Service
{
    public class TaskService : ITaskService
    {
        private ITaskRepository roleRepository = new TaskRepository();

        public KTTask GetDetail(int id) {
            return roleRepository.GetDetail(id);
        }

        public IEnumerable<KTTask> GetList(int orgid, int pageIndex, int pageSize, ref int totalCount) {

            var list = roleRepository.GetList(orgid, pageIndex, pageSize, ref totalCount);
            return list;
        }
    }
}
