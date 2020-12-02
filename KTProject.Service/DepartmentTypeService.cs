using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using KTProject.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Service
{
    public class DepartmentTypeService : IDepartmentTypeService
    {
        private IDepartmentTypeRepository repository = new DepartmentTypeRepository();

        public int Delete(DepartmentType obj) {
            return repository.Delete(obj);
        }

        public DepartmentType GetDetail(int id) {
            throw new NotImplementedException();
        }

        public IEnumerable<DepartmentType> GetList(string orgcode) {
            return repository.GetList(orgcode);
        }

        public DepartmentType Insert(DepartmentType obj) {
            return repository.Insert(obj);
        }

        public int Update(DepartmentType obj) {
            return repository.Update(obj);
        }
    }
}
