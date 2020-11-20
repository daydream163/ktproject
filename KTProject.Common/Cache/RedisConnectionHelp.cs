using StackExchange.Redis;
using System.Collections.Concurrent;

namespace KTProject.Common
{
	public static class RedisConnectionHelp
	{
		private static readonly object Locker = new object();
		private static ConnectionMultiplexer _instance;

		/// <summary>
		/// 线程安全的字典
		/// </summary>
		private static readonly ConcurrentDictionary<string, ConnectionMultiplexer> ConnectionCache = new ConcurrentDictionary<string, ConnectionMultiplexer>();

		/// <summary>
		/// 单例获取
		/// </summary>
		public static ConnectionMultiplexer Instance
		{
			get
			{
				if (_instance == null)
				{
					lock (Locker)
					{
						if (_instance == null || !_instance.IsConnected)
						{
							_instance = GetManager();
						}
					}
				}
				return _instance;
			}
		}

		/// <summary>
		/// 缓存获取
		/// </summary>
		/// <param name="connectionString"></param>
		/// <returns></returns>
		public static ConnectionMultiplexer GetConnectionMultiplexer(string connectionString)
		{
			if (!ConnectionCache.ContainsKey(connectionString))
			{
				ConnectionCache[connectionString] = GetManager(connectionString);
			}
			return ConnectionCache[connectionString];
		}

		/// <summary>
		/// 获取连接  
		/// </summary>
		/// <param name="connectionString"></param>
		/// <returns></returns>
		private static ConnectionMultiplexer GetManager(string connectionString = null)
		{
			connectionString = connectionString ?? Constants.SYS_DEFAULT_CACHE;
			var connect = ConnectionMultiplexer.Connect(connectionString);

			return connect;
		}
	}
}