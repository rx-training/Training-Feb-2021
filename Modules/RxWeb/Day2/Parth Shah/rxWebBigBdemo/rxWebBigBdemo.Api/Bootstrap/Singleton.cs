using Microsoft.Extensions.DependencyInjection;
using RxWeb.Core.Data;
using rxWebBigBdemo.BoundedContext.Singleton;
using rxWebBigBdemo.Infrastructure.Singleton;

namespace rxWebBigBdemo.Api.Bootstrap
{
    public static class Singleton
    {
        public static void AddSingletonService(this IServiceCollection serviceCollection)
        {
            #region Singleton
            serviceCollection.AddSingleton<ITenantDbConnectionInfo, TenantDbConnectionInfo>();
            serviceCollection.AddSingleton(typeof(UserAccessConfigInfo));
            #endregion Singleton
        }

    }
}




