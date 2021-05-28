using System;
using System.Collections.Generic;
using System.Text;

namespace ExceptionAssignment
{
    public class DateException : Exception
    {
        public DateException(string message) : base(message)
        {

        }

    }
}
