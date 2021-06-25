using System;
using System.Collections.Generic;

namespace StudentList
{
    class Program
    {
        public class person
        {
            public string Name { get; set; }
            public int Age { get; set; }

            public override string ToString()
            {
                return $"Name: {this.Name} And Age: {this.Age}";
            }
        }
        static void Main(string[] args)
        {

            //1. Create a list which will store 5 student
            //names and then display it search it index number



            List<string> Students = new List<string>();
            Console.WriteLine("Enter Name Of 5 Students :");
            for (int i = 0; i < 5; i++)
            {
                Students.Add(Console.ReadLine());
            }
            Console.WriteLine("\n Display the Students Name By Index ");
            for (int i = 0; i < 5; i++)
            {
                Console.Write($"{Students[i]}\t");
            }
            Console.WriteLine("\n");
            Console.WriteLine("\n Display the Students Name By Name ");
            foreach (var student in Students)
            {
                Console.Write($"{student}\t");
            }



            //2. Create a stack which will store Age of
            //person and display it last in first out order.

            var P = new Stack<person>();
            
            Console.WriteLine("Enter Name And Age of 5 person: ");
            for (int i = 0; i < 5; i++)
            {
                person p1 = new person();
                p1.Name = Console.ReadLine();
                p1.Age = Convert.ToInt32(Console.ReadLine());
                P.Push(p1);
            }

            for (int i = 0; i < 5; i++)
            {
                
                Console.WriteLine(P.Pop());
            }


            


        }
    }
}
