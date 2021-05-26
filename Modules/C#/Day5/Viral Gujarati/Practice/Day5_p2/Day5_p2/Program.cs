using System;
using System.Collections.Generic;

namespace Day5_p2
{
    class Program
    {
        static void Main(string[] args)
        {

            Stack<int> age = new Stack<int>();
            age.Push(4);
            age.Push(3);
            age.Push(2);
            age.Push(1);
            age.Push(0);


            Console.WriteLine("Last In First Out :");
            while (age.Count > 0)
            {
                int temp = age.Pop();
                Console.WriteLine(temp);
            }

        }
    }
}
