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
        /// 根据配置节点、数据，页数页码信息，获取html
        /// </summary>
        /// <typeparam name="T">数据类型</typeparam>
        /// <param name="node">xml文件配置节点</param>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="list">数据列表</param>
        /// <returns></returns>
        public static string GetDataList<T>(XmlNode node, int pageindex, int pagesize, IEnumerable<T> list) {
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
                afterHTML = beforeNode.InnerText;
            }

            XmlNode rowNode = node.SelectSingleNode("row");
            string rowTemplate = string.Empty;
            if (rowNode != null) {
                rowTemplate = rowNode.InnerText;
            }

            beforeHTML = beforeHTML.Replace("{totalcount}", list.Count().ToString())
                .Replace("{pageindex}", pageindex.ToString())
                .Replace("{pagesize}", pagesize.ToString());

            if (rowNode != null) {
                rowTotalHMTL = KTList.GetListFromTemplate<T>(list, rowTemplate);
            }

            returnstr = beforeHTML + rowTotalHMTL + afterHTML;
            return returnstr;
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
            PropertyInfo[] arrs = GetPropertyArray<T>();
            for (int i = 0; i < list.Count(); i++) {
                T item = list.ElementAt(i);
                string rowhtml = rowTemplate;
                for (int j = 0; j < arrs.Length; j++) {
                    string pro = arrs[j].Name;

                    string value = GetObjectPropertyValue<T>(item, pro);
                    rowhtml = rowhtml.Replace("{" + pro.ToLower() + "}", value);
                }
                htmlTotal += rowhtml;
            }

            return htmlTotal;
        }

        /// <summary>
        /// 获取某个对象的属性值
        /// </summary>
        /// <typeparam name="T">行数据类型</typeparam>
        /// <param name="t"></param>
        /// <param name="propertyname"></param>
        /// <returns></returns>
        private static string GetObjectPropertyValue<T>(T rowData, string pname) {
            Type type = typeof(T);
            PropertyInfo property = type.GetProperty(pname);

            if (property == null) {
                return string.Empty;
            }

            object value = property.GetValue(rowData, null);

            return value == null ? string.Empty : value.ToString();
        }

        private static PropertyInfo[] GetPropertyArray<T>() {
            PropertyInfo[] props = null;
            try {
                Type type = typeof(T);
                object obj = Activator.CreateInstance(type);
                props = type.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            }
            catch (Exception) { }
            return props;
        }
    }
}
