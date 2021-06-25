using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Lambda
{
    class Program
    {
        static void Main(string[] args)
        {
          
            Console.WriteLine(" Enter First number : ");
            int num1 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine(" Enter Second number :");
            int num2 = Convert.ToInt32(Console.ReadLine());

            Action<int, int>
                total = (a, b) =>
                {
                    int num = a + b;
                    Console.WriteLine(num);
                };

            Console.WriteLine("Addition is");
            total(num1, num2);
        }
    }
}
