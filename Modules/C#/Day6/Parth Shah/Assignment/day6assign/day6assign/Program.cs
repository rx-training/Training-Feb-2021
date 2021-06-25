using System;
//Compute area of rectangle using func delegate
namespace day6assign
{
    class Program
    {
        // Method

        static int Area(int x, int y)
        {
            return x * y;
        }
        static void Main(string[] args)
        {
            //Using Func delegate
            Func<int, int, int> mul = Area;

            Console.WriteLine("Enter length :");
            int length = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter width :");
            int width = Convert.ToInt32(Console.ReadLine());

            int result = mul(length, width);

            Console.WriteLine("The area of rectangle is :"+result);
        }
    }
}
