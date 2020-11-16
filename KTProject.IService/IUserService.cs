using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IService
{
    public interface IUserService
    {
        HttpResponseMessage GetUserLogo(string text, string rectFill, string textFill);
    }
}
