using Autofac;
using Autofac.Integration.WebApi;
using System;
using System.Reflection;
using System.Web.Http;

namespace KTProject.WebApi
{
    public static class AutofacApiConfig
    {
        /// <summary>
        /// 定义一个容器
        /// </summary>
        public static IContainer container { get; set; }

        /// <summary>
        /// 获取dal实例化对象
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static T Resolve<T>()
        {
            try
            {
                if (container == null)
                {
                    RegisterAutofac();
                }
            }
            catch (Exception ex)
            {
                throw new System.Exception("IOC实例化出错!" + ex.Message);
            }
            return container.Resolve<T>();
        }

        public static void RegisterAutofac()
        {
            var builder = new ContainerBuilder();

            // Get your HttpConfiguration.
            var config = GlobalConfiguration.Configuration;
            //builder.RegisterTypes(Assembly.Load("CoSubject.Repository").GetTypes()).AsImplementedInterfaces().PropertiesAutowired();
            builder.RegisterTypes(Assembly.Load("KTProject.Service").GetTypes()).AsImplementedInterfaces().PropertiesAutowired();

            // Register your Web API controllers.
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly()).PropertiesAutowired();

            // OPTIONAL: Register the Autofac filter provider.
            builder.RegisterWebApiFilterProvider(config);

            // OPTIONAL: Register the Autofac model binder provider.
            builder.RegisterWebApiModelBinderProvider();

            // 泛型注入
            //builder.RegisterGeneric(typeof(BaseService<>)).As(typeof(IBaseService<>)).InstancePerLifetimeScope();
            //builder.RegisterGeneric(typeof(BaseSubjectRepository<>)).As(typeof(ISubjectBaseRepository<>)).InstancePerLifetimeScope();
            //builder.RegisterGeneric(typeof(BaseManageRepository<>)).As(typeof(IManageBaseRepository<>)).InstancePerLifetimeScope();


            // Set the dependency resolver to be Autofac.
            container = builder.Build();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

        }
    }
}