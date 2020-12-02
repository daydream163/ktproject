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
    public class MetadataRepository : MySqlHelper, IMetadataRepository
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        public int Delete(int areaid, int id) {
            return db.Deleteable<Metadata>(m => m.id == id).ExecuteCommand();
        }

        public Metadata GetDetail(int id) {
            return db.Queryable<Metadata>()
                .Where((m) => m.id == id)
                .First();
        }

        public IEnumerable<Metadata> GetList(string orgid, string type, int[] areaids) {
            int[] array = new int[] { 1, 2 };

            return db.Queryable<Metadata>()
            .Where((m) => (m.discriminator == type))
            .WhereIF(areaids != null && areaids.Length > 0, m => areaids.Contains((int)m.areai))
            .ToList();
        }

        public Metadata Insert(Metadata metadata) {
            return db.Insertable<Metadata>(metadata).ExecuteReturnEntity();
        }

        public int Update(Metadata metadata) {
            return db.Updateable<Metadata>(metadata)
                .Where(m=>m.id == metadata.id)
                .ExecuteCommand();
        }
    }
}
