using RxWeb.Core.Data;
using rxWebBigBdemo.BoundedContext.Main;

namespace rxWebBigBdemo.UnitOfWork.Main
{
    public class MasterUow : BaseUow, IMasterUow
    {
        public MasterUow(IMasterContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IMasterUow : ICoreUnitOfWork { }
}


