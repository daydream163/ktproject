using KNet.Foundation.Cache;
using System;

namespace KTProject.Common
{
	public static class CacheHelper
    {
        private const string _CacheSource = "kt";
        public static T GetCache<T>(string cacheKey)
        {
            return GetCacheRedis<T>(cacheKey);
        }

        public static bool AddCache(string cacheKey, object value, int timeout = 20)
        {
            return SetCacheRedis(cacheKey, value, timeout);
        }

        public static bool AddCache(string cacheKey, object value, DateTime dateExpiration)
        {
            return SetCacheRedis(cacheKey, value, dateExpiration);
        }

        public static bool RemoveCache(string cacheKey)
        {
            return RemoveCacheRedis(cacheKey);
        }

        /// <summary>
        /// 取得缓存数据
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="cacheKey"></param>
        /// <returns></returns>
        private static T GetCacheRedis<T>(string cacheKey, string source = _CacheSource)
        {
            return Caching.Get<T>(source, cacheKey);
        }
        /// <summary>
        /// 固定时间过期
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="cacheKey"></param>
        /// <param name="value"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        private static bool SetCacheRedis<T>(string cacheKey, T value, int timeout = 20, string source = _CacheSource)
        {
            return Caching.Set<T>(source, cacheKey, value, timeout);
        }
        /// <summary>
        /// 固定时刻过期
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="cacheKey"></param>
        /// <param name="value"></param>
        /// <param name="dateExpiration"></param>
        /// <returns></returns>
        private static bool SetCacheRedis<T>(string cacheKey, T value, DateTime dateExpiration, string source = _CacheSource)
        {
            return Caching.Set<T>(source, cacheKey, value, dateExpiration);
        }
        /// <summary>
        /// 移除缓存
        /// </summary>
        /// <param name="cacheKey"></param>
        private static bool RemoveCacheRedis(string cacheKey, string source = _CacheSource)
        {
            return Caching.Remove(source, cacheKey);
        }
        public static bool Contains(string key, string source = _CacheSource)
        {
            return Caching.Contains(source, key);
        }
    }
}
