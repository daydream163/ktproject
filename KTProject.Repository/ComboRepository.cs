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
    public class ComboRepository: MySqlHelper, IComboRepository
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        public IEnumerable<ComboData> GetManageList(string areaid, string userid, string searchvalue = "") {
            string sql = string.Format(@"
SELECT p.id AS id, p. NAME AS name, COALESCE (p. CODE, ' ') AS code
FROM
	twk_resource p
WHERE
	p.discriminator = 'PERSON'
AND (
	p.ownerx = {1} OR p.myself = {1} OR p.area = {0} OR p.area IS NULL OR ( p.myManagerIds IS NOT NULL ) AND ( p.myManagerIds LIKE '{1}^%' )
)
AND (
	upper(concat(p.personName,' ',p.personSurname)) LIKE '%{2}%'
	OR upper(concat(p.personSurname,' ',p.personName)) LIKE '%{2}%'
	OR upper(p.NAME) LIKE '%{2}%'
	OR upper(p.CODE) LIKE '%{2}%'
)
AND p.hidden = 0
ORDER BY p. NAME
LIMIT 20 ", areaid, userid, searchvalue);
            return db.SqlQueryable<ComboData>(sql).ToList();
        }

        public IEnumerable<ComboData> GetParentIDList(string areaid, string userid, string searchvalue = "") {
            string sql = string.Format(@"SELECT 1 AS rowid,
	r.id AS id,
	r. NAME AS name,
	COALESCE (r.CODE, ' ') AS code
    FROM
	    twk_resource r
    WHERE
	    r.discriminator = 'COMPANY'
    AND (
	    r.ownerx = {1} OR r.area = {0} OR r.area IS NULL OR ( r.myManagerIds IS NOT NULL)
	    AND (r.myManagerIds LIKE '{1}^%' )
    )
    AND (upper(r. NAME) LIKE '%{2}%' OR upper(r. CODE) LIKE '%{2}%')
    AND r.hidden = 0
    ORDER BY
	    r. NAME
    LIMIT 20", areaid, userid, searchvalue);
            return db.SqlQueryable<ComboData>(sql).ToList();
        }
        public IEnumerable<T> GetTypeList<T>(string areaid, string userid, string searchvalue = "") where T : class, new() {
            string sql = string.Format(@" ", areaid, userid, searchvalue);
            return db.SqlQueryable<T>(sql).ToList();
        }
    }
}
