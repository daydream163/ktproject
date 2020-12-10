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
    public class MetadataService : IMetadataService
    {
        private IMetadataRepository repository = new MetadataRepository();


        public Metadata GetDetail(int id) {
            throw new NotImplementedException();
        }

        public IEnumerable<Metadata> GetList(string orgcode, string type, int[] areaids) {
            return repository.GetList(orgcode, type, areaids);
        }
        public IEnumerable<Metadata> GetList(string orgid, string type, string filter, int[] areaids) {
            return repository.GetList(orgid, type, filter, areaids);
        }

        public Metadata Insert(Metadata metadata) {
            return repository.Insert(metadata);
        }

        public int Update(Metadata metadata) {
            return repository.Update(metadata);
        }
          public int Delete(int areaid, int id) {
            return repository.Delete(areaid, id);
        }
  }
}
