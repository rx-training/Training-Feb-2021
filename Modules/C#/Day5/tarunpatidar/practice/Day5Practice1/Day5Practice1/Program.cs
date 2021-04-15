using System;
using System.Collections.Generic;

namespace Day5Practice1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> name = new List<string>
                { "Tarun",
                "TR",
                "Shivam",
                "Bharat",
                "Parth"
              };
            Console.WriteLine("Enter the name: ");
            string n = Console.ReadLine();

            int index = name.IndexOf(n.ToLower());
            Console.WriteLine("Index is " + index);

        }

    }
}
