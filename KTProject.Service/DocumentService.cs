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
    public class DocumentService : IDocumentService
    {
        private IDocumentRepository documentRepository = new DocumentRepository();

        public DocumentExt GetDetail(int id) {
            return documentRepository.GetDetail(id);
        }

        public IEnumerable<DocumentExt> GetList(int userid, int pageIndex, int pageSize, ref int totalCount) {

            var list = documentRepository.GetList(userid, pageIndex, pageSize, ref totalCount);
            return list;
        }
    }
}
