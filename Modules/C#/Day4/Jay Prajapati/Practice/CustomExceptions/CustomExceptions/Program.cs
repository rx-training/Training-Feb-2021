using System;

namespace CustomExceptions
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Tester t = new Tester();
                double answer = t.DoDivide(12, 4);
                Console.WriteLine("DoDivide(12,4) = {0}", answer);
                answer = t.DoDivide(0, 4);
                Console.WriteLine("DoDivide(12,4) = {0}", answer);
            }catch(DivideByZeroException ex)
            {
                Console.WriteLine(ex.Message);
            }catch(MyCustomException ex)
            {
                Console.WriteLine(ex.Message);
            }

        }
    }
}
