using System;
using System.Collections.Generic;


namespace Day5_p3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter number of products you want :");
            int pro = Convert.ToInt32(Console.ReadLine());

            Dictionary<string, int> map = new Dictionary<string, int>();
            for (int i = 0; i < pro; i++)
            {
                Console.Write("Enter product Name and price respectively : ");
                map.Add(Convert.ToString(Console.ReadLine()),
                    Convert.ToInt32(Console.ReadLine()));
            }

            Console.WriteLine("All product are:");
            foreach (var item in map)
            {
                Console.WriteLine(item.Key + "  " + item.Value);
            }
            Console.Write("Enter Product Name : ");
            Console.WriteLine("Price is :" + map[Convert.ToString(Console.ReadLine())]);
        }
    }
}

