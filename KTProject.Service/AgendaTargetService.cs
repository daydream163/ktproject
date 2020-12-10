using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using KTProject.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace KTProject.Service
{
    public class AgendaTargetService : IAgendaTargetService
    {
        DbSet<AgendaTarget> dbContext = null;
        CommonRepository commonRepository = null;
        public AgendaTargetService() {
            this.dbContext = new CommonRepository().GetDBContext<AgendaTarget>();
            commonRepository = new CommonRepository();
        }

        public int Delete(AgendaTarget obj) {
            throw new NotImplementedException();
        }

        public AgendaTarget GetDetail(int id) {
            throw new NotImplementedException();
        }

        public IEnumerable<AgendaTarget> GetList(int userid, string filter, int pageIndex, int pageSize, ref int totalCount) {
            throw new NotImplementedException();
        }

        public IEnumerable<AgendaTarget> GetList(int userid, string filter) {
            throw new NotImplementedException();
        }

        public AgendaTarget Insert(AgendaTarget obj) {
            return commonRepository.Insert<AgendaTarget>(obj);
        }
        public bool Insert(List<AgendaTarget> objs) {
            return dbContext.InsertRange(objs.ToArray());
        }

        public int Update(AgendaTarget obj) {
            throw new NotImplementedException();
        }
    }
}
