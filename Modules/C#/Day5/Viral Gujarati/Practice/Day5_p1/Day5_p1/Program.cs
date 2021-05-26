using System;
using System.Collections.Generic;


namespace Day5_p1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> name = new List<string>
                { "viral",
                "jay",
                "bhargav",
                "parth",
                "rahul"
              };
            Console.WriteLine("Enter the name: ");
            string n = Console.ReadLine();

            int index = name.IndexOf(n.ToLower());
            Console.WriteLine("Index is " + index);

        }
    }
}
         

