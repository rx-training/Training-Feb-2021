using System;

namespace DelegateT_1
{
    class Program
    {
        static void Main(string[] args)
        {
            Func<int, int, int> rec = recarea;

            int l, b;
            Console.Write("Enter the length of Rectangle: ");
            l = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter the breadth of Rectangle: ");
            b = Convert.ToInt32(Console.ReadLine());

            int result = recarea(l, b);
            Console.Write($"result:{result}");

            int recarea(int l, int b)
            {
                int area = l * b;
                return area;
            }
        }
    }
}