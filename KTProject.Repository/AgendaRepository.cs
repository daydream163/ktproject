using KTProject.Common;
using KTProject.IRepository;
using KTProject.Model;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Repository
{
    public class AgendaRepository : MySqlHelper, IAgendaRepository
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        public Agenda GetDetail(string id) {
            return db.Queryable<Agenda>()
                .Where((m) => m.id == id.ToString())
                .First();
        }

        /// <summary>
        /// 查询资源
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="filter"></param>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <param name="totalCount"></param>
        /// <returns></returns>
        public IEnumerable<Agenda> GetList(int userid, string filter, int pageIndex, int pageSize, ref int totalCount) {
            // TODO 获取机构下信息
            return db.Queryable<Agenda, Schedule>((a, s) => new object[] {
                    JoinType.Left, a.scheduleid == s.scheduleid
                })
                .Where((a) => a.authorid == userid.ToString())
                .ToPageList(pageIndex, pageSize, ref totalCount);
        }
        /// <summary>
        /// 查询资源
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="filter"></param>
        /// <returns></returns>
        public IEnumerable<AgendaView> GetList(int userid, string filter) {
            // TODO 获取机构下信息
            return db.Queryable<Agenda, Schedule, Metadata, KTResource>((a, s, m, r) => new object[] {
                    JoinType.Left, a.scheduleid == s.scheduleid,
                    JoinType.Left, a.typeid == m.id,
                    JoinType.Left, a.authorid == r.id,
                })
                .Where((a) => a.authorid == userid.ToString())
                .Select<AgendaView>("a.*, floor(UNIX_TIMESTAMP(a.creationDate)*1000) as creationDateunix, floor(UNIX_TIMESTAMP(a.lastModified)*1000) as lastModifiedunix, r.name as authorname, floor(UNIX_TIMESTAMP(s.startx)*1000) as startx, floor(UNIX_TIMESTAMP(s.endx)*1000) as endx, m.id as typeid, m.description as typename")
                .ToList();
        }
        /// <summary>
        /// 查询资源
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="filter"></param>
        /// <returns></returns>
        public IEnumerable<AgendaView> GetList(AgendaParams agendaParams) {
            // TODO 获取机构下信息
            return db.Queryable<Agenda, Schedule, Metadata, KTResource>((a, s, m, r) => new object[] {
                    JoinType.Left, a.scheduleid == s.scheduleid,
                    JoinType.Left, a.typeid == m.id,
                    JoinType.Left, a.authorid == r.id,
                })
                .Where((a, s, m, r) => a.authorid == agendaParams.userID)
                .WhereIF(agendaParams.fromTime != null && agendaParams.toTime != null, (a, s, m, r) => s.endMillis > agendaParams.fromTime && s.startMillis <= agendaParams.toTime)
                .Select<AgendaView>("a.*, floor(UNIX_TIMESTAMP(a.creationDate)*1000) as creationDateunix, floor(UNIX_TIMESTAMP(a.lastModified)*1000) as lastModifiedunix, r.name as authorname, floor(UNIX_TIMESTAMP(s.startx)*1000) as startx, floor(UNIX_TIMESTAMP(s.endx)*1000) as endx, m.id as typeid, m.description as typename")
                .ToList();
        }

        public Agenda Insert(Agenda obj) {
            return db.Insertable<Agenda>(obj).ExecuteReturnEntity();
        }

        public int Update(Agenda obj) {
            return db.Updateable<Agenda>(obj)
                .Where(m => m.id == obj.id)
                .ExecuteCommand();
        }
        public int Delete(Agenda obj) {
            return db.Deleteable<Agenda>(m => m.id == obj.id).ExecuteCommand();
        }

        public IEnumerable<AgendaTarget> GetTargetsList(int agendaid) {
            return db.Queryable<AgendaTarget, KTResource>((at, r) => new object[] {
                    JoinType.Left, at.resid == r.id
                }).Select<AgendaTarget>("at.*, r.name as resname, r.myphoto as myphoto")
                .Where((at) => at.agendaid == agendaid.ToString())
                .ToList();
        }

        public IEnumerable<KTResource> GetResourceList(string[] resIds) {
            return db.Queryable<KTResource>().In((r) => r.id, resIds)
                .ToList();
        }


        public ScheduleView GetSchedule(int? scheduleid) {
            return db.Queryable<ScheduleView>()
                .Where((s) => s.id == scheduleid).Select("*, floor(UNIX_TIMESTAMP(startx)*1000) as startMillis, floor(UNIX_TIMESTAMP(endx)*1000) as endMillis ")
                .First();
        }
        public IntID Maxid() {
            return db.SqlQueryable<IntID>("select max(id + 0) + 1 as id from twk_agendaevent").ToList().First<IntID>();
        }
    }
}
