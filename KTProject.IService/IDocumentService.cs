using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IService
{
    public interface IDocumentService
    {
        IEnumerable<DocumentExt> GetList(int userid, int pageIndex, int pageSize, ref int totalCount);
        DocumentExt GetDetail(int id);
    }
}
