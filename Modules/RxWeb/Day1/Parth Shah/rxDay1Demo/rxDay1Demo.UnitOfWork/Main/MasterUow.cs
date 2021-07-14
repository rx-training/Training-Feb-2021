using RxWeb.Core.Data;
using rxDay1Demo.BoundedContext.Main;

namespace rxDay1Demo.UnitOfWork.Main
{
    public class MasterUow : BaseUow, IMasterUow
    {
        public MasterUow(IMasterContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IMasterUow : ICoreUnitOfWork { }
}


