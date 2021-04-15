using System;

namespace AssignmentDay6
{
    class Program
    {
        public delegate Area Func<in x, in y, out Area>(int x, int y);

        public static int AreaMethod(int x, int y)
        {
            return x * y;
        }

        static void Main(string[] args)
        {
            int a, b;

            Console.Write("Enter First Number : ");
            a = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter Width : ");
            b = Convert.ToInt32(Console.ReadLine());

            Func<int, int, int> area = AreaMethod;
            Console.WriteLine("Area of rectangle : " + area(a, b));
        }
    }
}
