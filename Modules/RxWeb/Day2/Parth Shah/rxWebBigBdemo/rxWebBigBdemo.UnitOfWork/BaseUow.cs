using RxWeb.Core.Data;

namespace rxWebBigBdemo.UnitOfWork
{
    public class BaseUow : CoreUnitOfWork
    {
        public BaseUow(IDbContext context, IRepositoryProvider repositoryProvider, IAuditLog auditLog = null) : base(context, repositoryProvider, auditLog) { }
    }
}


