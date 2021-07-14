#region Namespace
using Day3RxwebBigB.BoundedContext.Main;
using Day3RxwebBigB.Infrastructure.Security;
using Day3RxwebBigB.UnitOfWork.DbEntityAudit;
using Day3RxwebBigB.UnitOfWork.Main;
using Microsoft.Extensions.DependencyInjection;
using RxWeb.Core;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data;
using RxWeb.Core.Security;

using Day3RxwebBigB.Domain.MasterModule;
            using Day3RxwebBigB.Domain.UserModule;
            #endregion Namespace





namespace Day3RxwebBigB.Api.Bootstrap
{
    public static class ScopedExtension
    {

        public static void AddScopedService(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IRepositoryProvider, RepositoryProvider>();
            serviceCollection.AddScoped<ITokenAuthorizer, TokenAuthorizer>();
            serviceCollection.AddScoped<IModelValidation, ModelValidation>();
            serviceCollection.AddScoped<IAuditLog, AuditLog>();
            serviceCollection.AddScoped<IApplicationTokenProvider, ApplicationTokenProvider>();
            serviceCollection.AddScoped(typeof(IDbContextManager<>), typeof(DbContextManager<>));

            #region ContextService

            serviceCollection.AddScoped<ILoginContext, LoginContext>();
            serviceCollection.AddScoped<ILoginUow, LoginUow>();
                        serviceCollection.AddScoped<IMasterContext, MasterContext>();
            serviceCollection.AddScoped<IMasterUow, MasterUow>();
            #endregion ContextService




            #region DomainService

            
            serviceCollection.AddScoped<ICategoryDomain, CategoryDomain>();
            
            serviceCollection.AddScoped<IUserDomain, UserDomain>();
            #endregion DomainService


        }
    }
}




