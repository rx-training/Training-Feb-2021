using System;

namespace LamdaFunction
{
    class Program
    {
       
       
        static void Main(string[] args)
        {
            //Addition Of Two Numbers Using Lambda Function 
            Func<int, int, int> Addition = (a, b) => a + b;
            Console.Write("Enter Two Numbers : ");
            int C = Convert.ToInt32(Console.ReadLine());
            int D = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"Addition : {Addition(C, D)}");

        }
    }
}
