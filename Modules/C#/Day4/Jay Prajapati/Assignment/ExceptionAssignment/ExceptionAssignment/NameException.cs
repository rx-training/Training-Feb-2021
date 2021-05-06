using System;
using System.Collections.Generic;
using System.Text;

namespace ExceptionAssignment
{
    public class NameException : Exception
    {
        public NameException(string message) : base(message)
        {

        }
    }
}
