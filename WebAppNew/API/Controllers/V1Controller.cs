using KTApp.Base;
using KTProject.Common;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Xml;

namespace KTApp.Controllers
{
    public class V1Controller : BaseApiController
    {
        public V1Controller()
        {
        }

        public class SmartComboParams
        {
            public string command { get; set; }
        }

        [System.Web.Http.HttpGet]
        public HttpResponseMessage GetData(string command)
        {
            //string command = "";
            string returnstr = "";
            switch (command)
            {
                case "get":
                    returnstr = "{\"ok\":true,\"object\":{\"id\":\"12771\",\"lastModifier\":\"史玉平 shi\",\"lastModified\":1589869011000,\"creationDate\":1589793479000,\"area\":\"同方知网\",\"areaId\":4957,\"displayName\":\"史 玉平\",\"loadComplete\":false,\"ads_id\":10791,\"location\":\"office\",\"address\":\"北京市海淀区西小口路\",\"city\":\"北京市\",\"province\":\"昌平区\",\"country\":\"汉\",\"zip\":\"\",\"url\":\"\",\"email\":\"215396052@qq.com\",\"mobile\":\"18500851205\",\"fax\":\"\",\"telephone\":\"\",\"avatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"resConnectionStatus\":\"active\",\"hourlyCost\":0,\"name\":\"史\",\"surname\":\"玉平\",\"courtesyTitle\":\"\"}}";
                    break;
                case "list":
                    returnstr = "{\"ok\":true,\"objects\":[{\"id\":9338,\"comment\":\"\",\"creationDate\":1590627961000,\"taskId\":\"46199\",\"taskName\":\"子任务一的子任务2\",\"taskCode\":\"Project001.01.02\",\"tcodid\":\"Project001.01.02\",\"newStatus\":\"STATUS_DONE\",\"newStatusColor\":\"#6EBEF4\",\"newStatusLabel\":\"完成\",\"oldStatus\":\"STATUS_ACTIVE\",\"oldStatusColor\":\"#3BBF67\",\"oldStatusLabel\":\"进行中\",\"ownerId\":6636,\"ownerAvatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"ownerDisplayName\":\"史 玉平\",\"ownerResourceId\":\"12771\",\"ownerConnectionStatus\":\"active\"},{\"id\":9337,\"comment\":\"\",\"creationDate\":1590627961000,\"taskId\":\"45685\",\"taskName\":\"子任务一\",\"taskCode\":\"Project001.01\",\"tcodid\":\"Project001.01\",\"newStatus\":\"STATUS_DONE\",\"newStatusColor\":\"#6EBEF4\",\"newStatusLabel\":\"完成\",\"oldStatus\":\"STATUS_ACTIVE\",\"oldStatusColor\":\"#3BBF67\",\"oldStatusLabel\":\"进行中\",\"ownerId\":6636,\"ownerAvatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"ownerDisplayName\":\"史 玉平\",\"ownerResourceId\":\"12771\",\"ownerConnectionStatus\":\"active\"},{\"id\":9336,\"comment\":\"\",\"creationDate\":1590627961000,\"taskId\":\"45686\",\"taskName\":\"子任务2\",\"taskCode\":\"Project001.02\",\"tcodid\":\"Project001.02\",\"newStatus\":\"STATUS_DONE\",\"newStatusColor\":\"#6EBEF4\",\"newStatusLabel\":\"完成\",\"oldStatus\":\"STATUS_WAITING\",\"oldStatusColor\":\"#F79136\",\"oldStatusLabel\":\"等候\",\"ownerId\":6636,\"ownerAvatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"ownerDisplayName\":\"史 玉平\",\"ownerResourceId\":\"12771\",\"ownerConnectionStatus\":\"active\"},{\"id\":9335,\"comment\":\"\",\"creationDate\":1590627944000,\"taskId\":\"46199\",\"taskName\":\"子任务一的子任务2\",\"taskCode\":\"Project001.01.02\",\"tcodid\":\"Project001.01.02\",\"newStatus\":\"STATUS_ACTIVE\",\"newStatusColor\":\"#3BBF67\",\"newStatusLabel\":\"进行中\",\"oldStatus\":\"STATUS_DONE\",\"oldStatusColor\":\"#6EBEF4\",\"oldStatusLabel\":\"完成\",\"ownerId\":6636,\"ownerAvatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"ownerDisplayName\":\"史 玉平\",\"ownerResourceId\":\"12771\",\"ownerConnectionStatus\":\"active\"},{\"id\":9334,\"comment\":\"\",\"creationDate\":1590627817000,\"taskId\":\"46199\",\"taskName\":\"子任务一的子任务2\",\"taskCode\":\"Project001.01.02\",\"tcodid\":\"Project001.01.02\",\"newStatus\":\"STATUS_DONE\",\"newStatusColor\":\"#6EBEF4\",\"newStatusLabel\":\"完成\",\"oldStatus\":\"STATUS_ACTIVE\",\"oldStatusColor\":\"#3BBF67\",\"oldStatusLabel\":\"进行中\",\"ownerId\":6636,\"ownerAvatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"ownerDisplayName\":\"史 玉平\",\"ownerResourceId\":\"12771\",\"ownerConnectionStatus\":\"active\"}],\"hasMore\":true}";
                    break;
                default:
                    returnstr = "{\"ok\":true,\"object\":{\"id\":\"12771\",\"lastModifier\":\"史玉平 shi\",\"lastModified\":1589869011000,\"creationDate\":1589793479000,\"area\":\"同方知网\",\"areaId\":4957,\"displayName\":\"史 玉平\",\"loadComplete\":false,\"ads_id\":10791,\"location\":\"office\",\"address\":\"北京市海淀区西小口路\",\"city\":\"北京市\",\"province\":\"昌平区\",\"country\":\"汉\",\"zip\":\"\",\"url\":\"\",\"email\":\"215396052@qq.com\",\"mobile\":\"18500851205\",\"fax\":\"\",\"telephone\":\"\",\"avatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"resConnectionStatus\":\"active\",\"hourlyCost\":0,\"name\":\"史\",\"surname\":\"玉平\",\"courtesyTitle\":\"\"}}";
                    break;
            }

            //return Content(returnstr, "application/json", Encoding.UTF8);
            return new HttpResponseMessage() {
                Content = new StringContent(returnstr, Encoding.UTF8, "application/json"),
            };
        }
        [System.Web.Http.HttpPost]
        public HttpResponseMessage GetData(SmartComboParams prms)
        {
            //string command = "";
            string returnstr = "";
            switch (prms.command)
            {
                case "get":
                    returnstr = "{\"ok\":true,\"object\":{\"id\":\"12771\",\"lastModifier\":\"史玉平 shi\",\"lastModified\":1589869011000,\"creationDate\":1589793479000,\"area\":\"同方知网\",\"areaId\":4957,\"displayName\":\"史 玉平\",\"loadComplete\":false,\"ads_id\":10791,\"location\":\"office\",\"address\":\"北京市海淀区西小口路\",\"city\":\"北京市\",\"province\":\"昌平区\",\"country\":\"汉\",\"zip\":\"\",\"url\":\"\",\"email\":\"215396052@qq.com\",\"mobile\":\"18500851205\",\"fax\":\"\",\"telephone\":\"\",\"avatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"resConnectionStatus\":\"active\",\"hourlyCost\":0,\"name\":\"史\",\"surname\":\"玉平\",\"courtesyTitle\":\"\"}}";
                    break;
                case "list":
                    returnstr = "{\"ok\":true,\"objects\":[{\"id\":9338,\"comment\":\"\",\"creationDate\":1590627961000,\"taskId\":\"46199\",\"taskName\":\"子任务一的子任务2\",\"taskCode\":\"Project001.01.02\",\"tcodid\":\"Project001.01.02\",\"newStatus\":\"STATUS_DONE\",\"newStatusColor\":\"#6EBEF4\",\"newStatusLabel\":\"完成\",\"oldStatus\":\"STATUS_ACTIVE\",\"oldStatusColor\":\"#3BBF67\",\"oldStatusLabel\":\"进行中\",\"ownerId\":6636,\"ownerAvatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"ownerDisplayName\":\"史 玉平\",\"ownerResourceId\":\"12771\",\"ownerConnectionStatus\":\"active\"},{\"id\":9337,\"comment\":\"\",\"creationDate\":1590627961000,\"taskId\":\"45685\",\"taskName\":\"子任务一\",\"taskCode\":\"Project001.01\",\"tcodid\":\"Project001.01\",\"newStatus\":\"STATUS_DONE\",\"newStatusColor\":\"#6EBEF4\",\"newStatusLabel\":\"完成\",\"oldStatus\":\"STATUS_ACTIVE\",\"oldStatusColor\":\"#3BBF67\",\"oldStatusLabel\":\"进行中\",\"ownerId\":6636,\"ownerAvatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"ownerDisplayName\":\"史 玉平\",\"ownerResourceId\":\"12771\",\"ownerConnectionStatus\":\"active\"},{\"id\":9336,\"comment\":\"\",\"creationDate\":1590627961000,\"taskId\":\"45686\",\"taskName\":\"子任务2\",\"taskCode\":\"Project001.02\",\"tcodid\":\"Project001.02\",\"newStatus\":\"STATUS_DONE\",\"newStatusColor\":\"#6EBEF4\",\"newStatusLabel\":\"完成\",\"oldStatus\":\"STATUS_WAITING\",\"oldStatusColor\":\"#F79136\",\"oldStatusLabel\":\"等候\",\"ownerId\":6636,\"ownerAvatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"ownerDisplayName\":\"史 玉平\",\"ownerResourceId\":\"12771\",\"ownerConnectionStatus\":\"active\"},{\"id\":9335,\"comment\":\"\",\"creationDate\":1590627944000,\"taskId\":\"46199\",\"taskName\":\"子任务一的子任务2\",\"taskCode\":\"Project001.01.02\",\"tcodid\":\"Project001.01.02\",\"newStatus\":\"STATUS_ACTIVE\",\"newStatusColor\":\"#3BBF67\",\"newStatusLabel\":\"进行中\",\"oldStatus\":\"STATUS_DONE\",\"oldStatusColor\":\"#6EBEF4\",\"oldStatusLabel\":\"完成\",\"ownerId\":6636,\"ownerAvatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"ownerDisplayName\":\"史 玉平\",\"ownerResourceId\":\"12771\",\"ownerConnectionStatus\":\"active\"},{\"id\":9334,\"comment\":\"\",\"creationDate\":1590627817000,\"taskId\":\"46199\",\"taskName\":\"子任务一的子任务2\",\"taskCode\":\"Project001.01.02\",\"tcodid\":\"Project001.01.02\",\"newStatus\":\"STATUS_DONE\",\"newStatusColor\":\"#6EBEF4\",\"newStatusLabel\":\"完成\",\"oldStatus\":\"STATUS_ACTIVE\",\"oldStatusColor\":\"#3BBF67\",\"oldStatusLabel\":\"进行中\",\"ownerId\":6636,\"ownerAvatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"ownerDisplayName\":\"史 玉平\",\"ownerResourceId\":\"12771\",\"ownerConnectionStatus\":\"active\"}],\"hasMore\":true}";
                    break;
                default:
                    returnstr = "{\"ok\":true,\"object\":{\"id\":\"12771\",\"lastModifier\":\"史玉平 shi\",\"lastModified\":1589869011000,\"creationDate\":1589793479000,\"area\":\"同方知网\",\"areaId\":4957,\"displayName\":\"史 玉平\",\"loadComplete\":false,\"ads_id\":10791,\"location\":\"office\",\"address\":\"北京市海淀区西小口路\",\"city\":\"北京市\",\"province\":\"昌平区\",\"country\":\"汉\",\"zip\":\"\",\"url\":\"\",\"email\":\"215396052@qq.com\",\"mobile\":\"18500851205\",\"fax\":\"\",\"telephone\":\"\",\"avatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"resConnectionStatus\":\"active\",\"hourlyCost\":0,\"name\":\"史\",\"surname\":\"玉平\",\"courtesyTitle\":\"\"}}";
                    break;
            }

            return new HttpResponseMessage() {
                Content = new StringContent(returnstr, Encoding.UTF8, "application/json"),
            };
        }
    }
}
