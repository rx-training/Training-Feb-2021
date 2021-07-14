using Microsoft.Extensions.DependencyInjection;
using rxDay1Demo.BoundedContext.Singleton;
using rxDay1Demo.Infrastructure.Singleton;
using RxWeb.Core.Data;

namespace rxDay1Demo.Api.Bootstrap
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




