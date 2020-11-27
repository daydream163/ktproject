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
    public class MessageService : IMessageService
    {
        private IMessageRepository roleRepository = new MessageRepository();

        public Message GetDetail(int userid, int id) {
            throw new NotImplementedException();
        }

        public IEnumerable<Message> GetList(int userid, int pageIndex, int pageSize, ref int totalCount) {

            var list = roleRepository.GetList(userid, pageIndex, pageSize, ref totalCount);
            return list;
        }


        public int GetUnReadCount(int userid) {
            var count = roleRepository.GetUnReadCount(userid);
            return count;
        }
    }
}
