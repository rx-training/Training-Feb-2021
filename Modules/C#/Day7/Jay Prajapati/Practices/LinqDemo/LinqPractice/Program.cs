using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace LinqPractice
{
    delegate bool FindStudent(Student std);
    class StudentExtension
    {
        public static Student[] Where(Student[] stdArray, FindStudent del)
        {
            int i = 0;
            Student[] result = new Student[10];
            foreach (Student std in stdArray)
            {
                if (del(std))
                {
                    result[i] = std;
                }
            }
            return result;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Data source
            string[] names = { "Bill", "Steve", "James", "Mohan" };

            //LINQ Query
            var myLinqQuery = from name in names
                              where name.Contains('a')
                              select name;
            // Query execution
            foreach (var name in myLinqQuery)
            {
                Console.Write($"{name} ");
            }
            Student[] studentArray =
            {
                 new Student() { StudentID = 1, StudentName = "John", Age = 18 },
            new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 },
            new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 },
            new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 },
            new Student() { StudentID = 5, StudentName = "Ron" , Age = 31 },
            new Student() { StudentID = 6, StudentName = "Chris",  Age = 17 },
            new Student() { StudentID = 7, StudentName = "Rob",Age = 19  },
            };

            Student[] students = new Student[10];
            int i = 0;
            foreach (Student std in studentArray)
            {
                if(std.Age > 12 && std.Age < 20)
                {
                    students[i] = std;
                    i++;
                }
            }

            // Using Delegate

            Student[] students1 = StudentExtension.Where(studentArray, delegate(Student std){
                return std.Age > 12 && std.Age < 20;
            });

            // Use LINQ to find teenager students
            Student[] teenAgerStudents = studentArray.Where(s => s.Age > 12 && s.Age < 20).ToArray();

            //Use LINQ to find first student whose name is Bill
            Student bill = studentArray.Where(s => s.StudentName == "Bill").FirstOrDefault();

            // Use LINQ to find student whose StudentID is 5
            Student student5 = studentArray.Where(s => s.StudentID == 5).FirstOrDefault();

            

            // string collection
            IList<string> stringList = new List<string>() {
                    "C# Tutorials",
                    "VB.NET Tutorials",
                    "Learn C++",
                    "MVC Tutorials" ,
                    "Java"
};

            // LINQ Query Syntax
            var result = from s in stringList
                         where s.Contains("Tutorials")
                         select s;

            // LINQ Method Query Syntax
            var result1 = stringList.Contains("Tutorials");

            IList mixedList = new ArrayList();
            mixedList.Add(0);
            mixedList.Add("One");
            mixedList.Add("Two");
            mixedList.Add(3);
            mixedList.Add(new Student()
            {
                StudentID = 1,
                StudentName = "Bill"
            });
            var stringresult = from s in mixedList.OfType<string>()
                               select s;
            var intResult = from s in mixedList.OfType<int>()
                            select s;
            foreach (var item in stringresult)
            {
                Console.WriteLine("\n\n"+item);
            }

            foreach (var item in intResult)
            {
                Console.WriteLine(item);
            }
            var orderByResult = from s in studentArray
                                orderby s.StudentName
                                select s;
            foreach (var std in orderByResult)
            {
                Console.WriteLine( std.StudentID + " "+ std.StudentName);
            }
            var thenByDescResult = studentArray.OrderBy(s => s.StudentName).ThenBy(s => s.Age);
            foreach (var item in thenByDescResult)
            {
                Console.WriteLine(item.StudentName + " " + item.Age);
            }

            var groupedResult = from s in studentArray
                                group s by s.Age;
            foreach (var ageGroup in groupedResult)
            {
                Console.WriteLine("Age Group: {0}", ageGroup.Key);
                    foreach (var s in ageGroup)
                {
                    Console.WriteLine("Student Name: {0}", s.StudentName);
                }
            }
        }
    }
}
