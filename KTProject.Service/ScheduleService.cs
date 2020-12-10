using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using KTProject.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace KTProject.Service
{
    public class ScheduleService : IScheduleService
    {
        DbSet<Schedule> dbContext = null;
        CommonRepository commonRepository = null;
        public ScheduleService() {
            this.dbContext = new CommonRepository().GetDBContext<Schedule>();
            commonRepository = new CommonRepository();
        }

        public int Delete(Schedule obj) {
            throw new NotImplementedException();
        }

        public Schedule GetDetail(int id) {
            throw new NotImplementedException();
        }

        public IEnumerable<Schedule> GetList(int userid, string filter, int pageIndex, int pageSize, ref int totalCount) {
            throw new NotImplementedException();
        }

        public IEnumerable<Schedule> GetList(int userid, string filter) {
            throw new NotImplementedException();
        }

        public Schedule Insert(Schedule obj) {
            return commonRepository.Insert<Schedule>(obj);
        }

        public int Update(Schedule obj) {
            throw new NotImplementedException();
        }
    }
}
