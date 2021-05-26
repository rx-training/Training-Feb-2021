using System;
using Microsoft.EntityFrameworkCore;
using EFCoreCodeFirstDemo.Models;
using System.Linq;

namespace EFCoreCodeFirstDemo
{
    public class Program
    {
        static void Main(string[] args)
        {
            using (var context = new SchoolContext())
            {
                var std = new Student()
                {
                    Name = "Bill"
                };
                context.Students.Add(std);
                context.SaveChanges();
                var studentsWithSameName = context.Students
                                                  .Where(s => s.Name == GetName())
                                                  .ToList();
                foreach (var st in studentsWithSameName)
                {
                    Console.WriteLine($"{st.StudentId}\t{st.Name}");
                }

                var studentWithGrade = context.Students
                                              .Where(s => s.Name == "Bill")
                                              .Include(s => s.Grade)
                                              .Include(s => s.StudentCourses)
                                              .FirstOrDefault();

                                              
              

            }
            
        }
        public static string GetName()
        {
            return "Bill";
        }
    }
}
