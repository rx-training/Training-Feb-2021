using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using Day3RxwebBigB.UnitOfWork.Main;
using Day3RxwebBigB.Models.Main;

namespace Day3RxwebBigB.Domain.UserModule
{
    public class UserDomain : IUserDomain
    {
        public UserDomain(IUserUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync( )
        {

            Uow.Repository<User>().All();
        }

        public Task<object> GetBy( int id)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(User entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(User entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(User entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(User entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

		public User PatchEntity(int id)
        {
            throw new NotImplementedException();
        }

        public HashSet<string> DeleteValidation(parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync( parameters)
        {
            throw new NotImplementedException();
        }

        public IUserUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IUserDomain : ICorePatchDomain<User> { }
}
