using System;
using System.Collections;
using System.Collections.Generic;


//Create a stack which will store Age of person and display it last in first out order.
namespace day5practice2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter ur age : \n");
            Stack st = new Stack();
             int age1 = Convert.ToInt32(Console.ReadLine());
            st.Push(age1);
            int age2 = Convert.ToInt32(Console.ReadLine());
            st.Push(age2);
            int age3 = Convert.ToInt32(Console.ReadLine());
            st.Push(age3);

            Console.WriteLine("Display the age in LIFO manner :\n");

            foreach (Object obj in st)
            {
                Console.WriteLine(obj);
            }
            Console.WriteLine(); Console.WriteLine();
            Console.WriteLine("The number of elements in the stack " + st.Count);
            Console.ReadKey();
        }
    }
}
