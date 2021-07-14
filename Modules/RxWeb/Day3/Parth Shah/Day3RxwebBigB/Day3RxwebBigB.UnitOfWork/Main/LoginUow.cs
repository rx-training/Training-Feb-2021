using Day3RxwebBigB.BoundedContext.Main;
using RxWeb.Core.Data;

namespace Day3RxwebBigB.UnitOfWork.Main
{
    public class LoginUow : BaseUow, ILoginUow
    {
        public LoginUow(ILoginContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface ILoginUow : ICoreUnitOfWork { }
}


