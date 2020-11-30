﻿using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IRepository
{
    public interface IMessageRepository
    {
        IEnumerable<Message> GetList(int userid, int pageIndex, int pageSize, ref int totalCount);
        int GetUnReadCount(int userid);
        Message GetDetail(int userid, int id);
    }
}
