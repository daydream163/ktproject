using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace KTProject.Common.HTML
{
    /// <summary>
    /// 根据数据、模板，生成HTML列表
    /// </summary>
    public class KTList
    {
        /// <summary>
        /// 获取配置节点
        /// </summary>
        /// <param name="fileName">xml配置文件名</param>
        /// <param name="id">node的id属性</param>
        /// <returns></returns>
        public static XmlNode GetConfigNode(string fileName, string id) {
            if (string.IsNullOrWhiteSpace(fileName) || string.IsNullOrWhiteSpace(id)) {
                return null;
            }

            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/" + fileName);
            XmlNode node = null;
            string xmlPath = string.Format("/nodes/node[@id=\"{0}\"]", id);
            node = doc.SelectSingleNode(xmlPath);
            return node;
        }

        /// <summary>
        /// 将对象obj的所有属性值，替换掉模板中的字符串，根据属性匹配
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="templateHTML"></param>
        /// <param name="obj">对象，支持匿名对象</param>
        /// <returns></returns>
        public static string GetContentByReplace<T>(string templateHTML, T obj) {
            PropertyInfo[] arrs = obj.GetType().GetProperties();
            string html = templateHTML;
            for (int j = 0; j < arrs.Length; j++) {
                string pro = arrs[j].Name;
                object value = obj.GetType().GetProperties().Where(x => x.Name == pro).First().GetValue(obj, null);
                html = html.Replace("{" + pro.ToLower() + "}", value != null ? value.ToString() : "");
            }

            return html;
        }

        /// <summary>
        /// 根据配置节点、数据，页数页码信息，获取html
        /// </summary>
        /// <typeparam name="T">数据类型</typeparam>
        /// <param name="node">xml文件配置节点</param>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="list">数据列表</param>
        /// <returns></returns>
        public static string GetDataList<T>(XmlNode node, int pageindex, int pagesize, IEnumerable<T> list, int totalcount = 0) {
            string returnstr;
            string rowTotalHMTL = string.Empty;
            string beforeHTML = string.Empty;
            string afterHTML = string.Empty;
            XmlNode beforeNode = node.SelectSingleNode("before");
            if (beforeNode != null) {
                beforeHTML = beforeNode.InnerText;
            }
            XmlNode afterNode = node.SelectSingleNode("after");
            if (afterNode != null) {
                afterHTML = afterNode.InnerText;
            }

            XmlNode rowNode = node.SelectSingleNode("row");
            string rowTemplate = string.Empty;
            if (rowNode != null) {
                rowTemplate = rowNode.InnerText;
            }

            totalcount = totalcount == 0 ? list.Count() : totalcount;
            beforeHTML = beforeHTML.Replace("{totalcount}", totalcount.ToString())
                .Replace("{pageindex}", pageindex.ToString())
                .Replace("{pagesize}", pagesize.ToString());


            //myself♂equal♂0*<img src="" class="face ">♀1*<div>test</div>♀2*&nbsp
            //status♂equal♂1*<img src="" class="face ">♀2*&nbsp♀3*&nbsp
            XmlNodeList expressList = node.SelectNodes("fieldsexpress/express");
            List<MyExpress> listExpress = GetExpressList(expressList);

            if (rowNode != null) {
                rowTotalHMTL = KTList.GetListFromTemplate<T>(list, rowTemplate, listExpress);
            }

            returnstr = beforeHTML + rowTotalHMTL + afterHTML;
            return returnstr;
        }

        private static List<MyExpress> GetExpressList(XmlNodeList expressList) {
            List<MyExpress> listExpress = new List<MyExpress>();
            if (expressList != null && expressList.Count > 0) {
                for (int j = 0; j < expressList.Count; j++) {
                    string express = expressList[j].InnerText;
                    string[] conditions = express.Split('♂');
                    if (conditions.Length < 3) {
                        continue;
                    }
                    MyExpress myexpress = new MyExpress();
                    string field = conditions[0];
                    string sign = conditions[1];
                    string values = conditions[2];
                    myexpress.field = field;
                    myexpress.sign = sign;

                    if (!string.IsNullOrWhiteSpace(values)) {
                        string[] arrValues = values.Split('♀');
                        List<Dictionary<string, string>> listValues = new List<Dictionary<string, string>>();
                        Dictionary<string, string> kv = new Dictionary<string, string>();
                        for (int m = 0; m < arrValues.Length; m++) {
                            string[] value = arrValues[m].Split('*');
                            kv[value[0]] = value[1];
                        }
                        myexpress.dicConditions = kv;
                    }
                    listExpress.Add(myexpress);
                }
            }

            return listExpress;
        }

        /// <summary>
        /// 根据模板组装返回数据List的HTML内容
        /// </summary>
        /// <typeparam name="T">行数据类型</typeparam>
        /// <param name="list">数据列表</param>
        /// <param name="rowTemplate">行模板</param>
        /// <param name="listExpress"></param>
        /// <returns></returns>
        public static string GetListFromTemplate<T>(IEnumerable<T> list, string rowTemplate, List<MyExpress> listExpress) {
            string htmlTotal = null;
            PropertyInfo[] arrs = KTUtils.GetPropertyArray<T>();
            for (int i = 0; i < list.Count(); i++) {
                T item = list.ElementAt(i);
                string rowhtml = rowTemplate;
                // {字段}替换为值
                for (int j = 0; j < arrs.Length; j++) {
                    string pro = arrs[j].Name;

                    string value = KTUtils.GetObjectPropertyValue<T>(item, pro);
                    rowhtml = rowhtml.Replace("{" + pro.ToLower() + "}", value);

                    // 处理expressfield配置
                    if (listExpress != null && listExpress.Count > 0) {
                        for (int m = 0; m < listExpress.Count; m++) {
                            MyExpress obj = listExpress[m];
                            if (obj.sign == "equal") {
                                // 目前只处理 等于情况 TODO：更多情况，如大小比较类
                                if (obj.field == pro) {
                                    // 获取值对应的html
                                    if (obj.dicConditions.ContainsKey(value)) {
                                        string v = obj.dicConditions[value];
                                        rowhtml = rowhtml.Replace("#" + pro.ToLower() + "#", v);
                                    }
                                }
                            }

                            if (j == arrs.Length - 1 && m == listExpress.Count - 1) {
                                // 最后一个，替换掉默认的
                                rowhtml = rowhtml.Replace("#" + pro.ToLower() + "#", obj.dicConditions["else"]);
                            }
                        }
                    }
                }


                // 更新行号
                rowhtml = rowhtml.Replace("#rowid#", i.ToString());
                htmlTotal += rowhtml;
            }


            return htmlTotal;
        }

        /// <summary>
        /// 根据模板组装返回数据List的HTML内容
        /// </summary>
        /// <typeparam name="T">行数据类型</typeparam>
        /// <param name="list">数据列表</param>
        /// <param name="rowTemplate">行模板</param>
        /// <returns></returns>
        public static string GetListFromTemplate<T>(IEnumerable<T> list, string rowTemplate) {
            string htmlTotal = null;
            PropertyInfo[] arrs = KTUtils.GetPropertyArray<T>();
            for (int i = 0; i < list.Count(); i++) {
                T item = list.ElementAt(i);
                string rowhtml = rowTemplate;
                for (int j = 0; j < arrs.Length; j++) {
                    string pro = arrs[j].Name;

                    string value = KTUtils.GetObjectPropertyValue<T>(item, pro);
                    rowhtml = rowhtml.Replace("{" + pro.ToLower() + "}", value);
                }
                // 更新行号
                rowhtml = rowhtml.Replace("#rowid#", i.ToString());
                htmlTotal += rowhtml;
            }

            return htmlTotal;
        }
    }

    public class MyExpress
    {
        public string field { get; set; }
        public string sign { get; set; }
        public Dictionary<string, string> dicConditions { get; set; }
    }
}
