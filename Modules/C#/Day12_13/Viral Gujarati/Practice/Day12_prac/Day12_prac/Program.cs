using Day12_prac.Models;
using System;

namespace Day12_prac
{
    class Program
    {
        static void Main(string[] args)
        {
            var student = new Student() { Name = "Jevik" };
            var dbContext = new dbContext();
            dbContext.Students.Add(student);
            //dbContext.SaveChanges();


            Console.WriteLine("Hello World!");
        }
    }
}