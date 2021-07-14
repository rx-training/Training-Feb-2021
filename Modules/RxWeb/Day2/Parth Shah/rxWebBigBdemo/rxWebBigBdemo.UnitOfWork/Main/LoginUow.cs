using RxWeb.Core.Data;
using rxWebBigBdemo.BoundedContext.Main;

namespace rxWebBigBdemo.UnitOfWork.Main
{
    public class LoginUow : BaseUow, ILoginUow
    {
        public LoginUow(ILoginContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface ILoginUow : ICoreUnitOfWork { }
}


