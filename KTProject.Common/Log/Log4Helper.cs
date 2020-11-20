using log4net;

namespace KTProject.Common
{
	/// <summary>
	/// 日志类
	/// </summary>
	public class Log4Helper
	{
		private static readonly ILog logInfo = LogManager.GetLogger("WebInfoLogger");

		public static void Info(object message)
		{
			if (logInfo.IsInfoEnabled)
			{
				logInfo.Info(message);
			}
		}
	}
}