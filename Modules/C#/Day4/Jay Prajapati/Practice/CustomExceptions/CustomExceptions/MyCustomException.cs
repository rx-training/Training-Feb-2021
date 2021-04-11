using System;
using System.Collections.Generic;
using System.Text;

namespace CustomExceptions
{
    public class Tester
    {
        public double DoDivide(double x, double y) 
        {
            if (y == 0)
                throw new DivideByZeroException();
            if (x == 0)
                throw new MyCustomException("Dividend can't be Zero");
            return x / y;
        }
    }
    public class MyCustomException : Exception
    {
        public MyCustomException(string message) : base(message)
        {

        }
    }
}
