using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Common
{
    public class KTUtils
    {
        public static string GetAvatar(KTResource obj) {
            string txt = string.Empty;
            if (!string.IsNullOrEmpty(obj.myPhoto)) {
                string[] arr = obj.myPhoto.Split(new string[] { "+++" }, StringSplitOptions.RemoveEmptyEntries);
                if (arr.Length == 2) {
                    return "/" + arr[1];
                }
            }

            // 李 小利 返回：小利
            if (!string.IsNullOrEmpty(obj.name)) {
                string _s = obj.name.Replace(" ", "");
                txt = _s.Length <= 2 ? _s : _s.Substring(0, 2);
            }

            return "/img/svgAvatar?code=" + System.Web.HttpUtility.UrlEncode(txt) + "&fill=hsl%28180%2C70%25%2C80%25%29&stroke=hsl%28180%2C90%25%2C20%25%29";
        }
        public static string GetAvatar2(KTResourceSimpleView obj) {
            string txt = string.Empty;
            if (!string.IsNullOrEmpty(obj.avatarUrl)) {
                string[] arr = obj.avatarUrl.Split(new string[] { "+++" }, StringSplitOptions.RemoveEmptyEntries);
                if (arr.Length == 2) {
                    return "/" + arr[1];
                }
            }

            // 李 小利 返回：小利
            if (!string.IsNullOrEmpty(obj.name)) {
                string _s = obj.name.Replace(" ", "");
                txt = _s.Length <= 2 ? _s : _s.Substring(0, 2);
            }

            return "/img/svgAvatar?code=" + System.Web.HttpUtility.UrlEncode(txt) + "&fill=hsl%28180%2C70%25%2C80%25%29&stroke=hsl%28180%2C90%25%2C20%25%29";
        }


        public static TChild AutoCopy<TParent, TChild>(TParent parent) where TChild : TParent, new() {
            TChild child = new TChild();
            var ParentType = typeof(TParent);
            var Properties = ParentType.GetProperties();
            foreach (var Propertie in Properties) {
                //循环遍历属性
                if (Propertie.CanRead && Propertie.CanWrite) {
                    //进行属性拷贝
                    Propertie.SetValue(child, Propertie.GetValue(parent, null), null);
                }
            }
            return child;
        }

        /// <summary>
        /// 没有继承关系的拷贝
        /// </summary>
        /// <typeparam name="TFrom"></typeparam>
        /// <typeparam name="TTo"></typeparam>
        /// <param name="from"></param>
        /// <returns></returns>
        public static TTo AutoCopy2<TFrom, TTo>(TFrom from) where TTo: new(){
            TTo toObj = new TTo();
            var FromType = typeof(TFrom);
            var ToType = typeof(TTo);
            var fromProperties = FromType.GetProperties();
            var toProperties = ToType.GetProperties();
            foreach (var fromP in fromProperties) {
                foreach (var toP in toProperties) {
                    if (fromP.Name == toP.Name) {
                        if (fromP.CanRead && toP.CanWrite) {
                            //进行属性拷贝
                            toP.SetValue(toObj, fromP.GetValue(from, null), null);
                        }
                    }
                }
            }
            return toObj;
        }


        /// <summary>
        /// 将web Request包含的参数信息，封装为T类型对象，并返回T类型对象
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="nameValueCollection"></param>
        /// <returns></returns>
        public static T GetObjectFromRequest<T>(NameValueCollection nameValueCollection) {
            List<KeyValuePair<string, string>> kvPairs = new List<KeyValuePair<string, string>>();
            for (int i = 0; i < nameValueCollection.AllKeys.Count(); i++) {
                string key = nameValueCollection.AllKeys[i];
                kvPairs.Add(new KeyValuePair<string, string>(key, nameValueCollection[key]));
            }

            return GetObjectFromRequest<T>(kvPairs);
        }
        /// <summary>
        /// 将web Request包含的参数信息，封装为T类型对象，并返回T类型对象
        /// （仅映射字段匹配的项，不区分大小写）
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="kvPairs"></param>
        /// <returns></returns>
        public static T GetObjectFromRequest<T>(IEnumerable<KeyValuePair<string, string>> kvPairs) {
            Type type = typeof(T);
            // 获取到泛型所有属性的集合
            PropertyInfo[] props = GetPropertyArray<T>();
            // 获取泛型的程序集
            Assembly assembly = Assembly.GetAssembly(type);
            // 泛型实例化
            T _obj = (T)assembly.CreateInstance(type.FullName);
            // pi.PropertyType.Name
            foreach (PropertyInfo pi in props) {
                //判断属性的类型是不是String
                //if (!pi.PropertyType.Name.Equals("Nullable^1")) {
                String _name = pi.Name;
                // 循环键值对列表，如果跟属性值相同，就赋值到泛型T的对象上
                for (int i = 0; i < kvPairs.Count(); i++) {
                    KeyValuePair<string, string> kv = kvPairs.ElementAt(i);
                    // bool类型的，有的会有is前缀，数据库字段中没有，这里做下兼容
                    if (kv.Key.Equals(_name, StringComparison.OrdinalIgnoreCase)
                        || kv.Key.Equals("is" + _name, StringComparison.OrdinalIgnoreCase)) {
                        object _value = kv.Value;
                        // 特殊处理bool类型传值，这里做下兼容
                        if (_value != null && _value.ToString().ToLower() == "yes") {
                            _value = true;
                        }
                        else if (_value != null && _value.ToString().ToLower() == "no") {
                            _value = false;
                        }
                        else { }

                        if (pi.PropertyType.Name.Equals("Nullable`1")) {
                            object _v = ChangeType(_value, pi.PropertyType);
                            pi.SetValue(_obj, _v, null);//给泛型的属性赋值
                        }
                        else {
                            // long 字符串 给 datetime字段赋值
                            if(pi.PropertyType.Name == "DateTime" && !(_value is DateTime)) {
                                long _r = 0;
                                if (long.TryParse(_value.ToString(), out _r)) {
                                    object _time = KTDateTime.ConvertIntDateTime(_r);
                                    pi.SetValue(_obj, _time, null);
                                }
                            }
                            else {
                                pi.SetValue(_obj, _value, null);
                            }
                        }
                    }
                }
                //}

            }
            return _obj;
        }


        public static object ChangeType(object value, Type conversionType) {
            if (conversionType.IsGenericType &&
                conversionType.GetGenericTypeDefinition().Equals(typeof(Nullable<>))) {

                if (value == null)
                    return null;

                System.ComponentModel.NullableConverter nullableConverter
                    = new System.ComponentModel.NullableConverter(conversionType);

                conversionType = nullableConverter.UnderlyingType;
            }

            return Convert.ChangeType(value, conversionType);
        }

        /// <summary>
        /// 获取泛型T的属性字段列表
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static PropertyInfo[] GetPropertyArray<T>() {
            PropertyInfo[] props = null;
            try {
                Type type = typeof(T);
                object obj = Activator.CreateInstance(type);
                props = type.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            }
            catch (Exception) { }
            return props;
        }

        /// <summary>
        /// 获取某个泛型T对象的属性值
        /// </summary>
        /// <typeparam name="T">行数据类型</typeparam>
        /// <param name="obj">泛型对象</param>
        /// <param name="propertyname">属性值</param>
        /// <returns></returns>
        public static string GetObjectPropertyValue<T>(T obj, string pname) {
            Type type = typeof(T);
            PropertyInfo property = type.GetProperty(pname);

            if (property == null) {
                return string.Empty;
            }

            object value = property.GetValue(obj, null);

            return value == null ? string.Empty : value.ToString();
        }

    }
}
