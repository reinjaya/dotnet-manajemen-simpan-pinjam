﻿using Microsoft.EntityFrameworkCore;
using WebAPI.Context;
using WebAPI.Handlers;
using WebAPI.Models;
using WebAPI.ViewModel;

namespace WebAPI.Repositories.Data
{
    public class AccountRepository
    {
        private readonly MyContext _context;
        public AccountRepository(MyContext context)
        {
            _context = context;
        }

        public UserRole GetLoginData(string userName, string password)
        {
            var data = _context.Users.FirstOrDefault(x => x.UserName.Equals(userName));
            string roleName = _context.Roles.Find(data.IdRole).RoleName;

            //bool pass = Hashing.ValidatePassword(password, data.Password);

            if (true) //testing
            {
                UserRole result = new UserRole()
                {
                    Id = data.IdUser,
                    Name = data.Nama,
                    RoleName = roleName
                };

                return result;
            }
            return null;
        }

        public bool CheckEmail(string email)
        {
            var data = _context.Users.FirstOrDefault(x => x.Email.Equals(email)).IdUser;

            if (data != null)
            {
                return false;
            }

            return true;
        }

        public bool CheckUserName(string userName)
        {
            var data = _context.Users.FirstOrDefault(x => x.UserName.Equals(userName)).IdUser;

            if (data != null)
            {
                return false;
            }

            return true;
        }

    }
}
