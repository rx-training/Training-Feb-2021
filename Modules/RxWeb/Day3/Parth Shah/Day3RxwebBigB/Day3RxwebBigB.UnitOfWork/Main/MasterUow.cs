using RxWeb.Core.Data;
using Day3RxwebBigB.BoundedContext.Main;

namespace Day3RxwebBigB.UnitOfWork.Main
{
    public class MasterUow : BaseUow, IMasterUow
    {
        public MasterUow(IMasterContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IMasterUow : ICoreUnitOfWork { }
}


