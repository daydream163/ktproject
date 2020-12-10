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
    public class ComboService : IComboService
    {
        private IComboRepository repository = new ComboRepository();

        public IEnumerable<ComboData> GetManageList(string areaid, string userid, string searchvalue = "") {
            return repository.GetManageList(areaid, userid, searchvalue);
        }

        public IEnumerable<ComboData> GetParentIDList(string areaid, string userid, string searchvalue = "") {
            return repository.GetParentIDList(areaid, userid, searchvalue);
        }
        public IEnumerable<T> GetTypeList<T>(string areaid, string userid, string searchvalue = "") where T : class, new() {
            return repository.GetTypeList<T>(areaid, userid, searchvalue);
        }
    }
}
