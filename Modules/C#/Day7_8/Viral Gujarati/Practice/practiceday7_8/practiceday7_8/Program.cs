using System;
using System.Linq;
using System.Collections.Generic;
using System.Collections;

namespace practiceday7_8

{
    public class Student
    {
        public Student()
        {
        }

        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public int Age { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {

            IList<Student> studentList = new List<Student>() {
            new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
            new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
            new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
            new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
            new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 }
       };
            // Using where 

            var filteredResult = studentList.Where((s, i) =>
            {
                if (i % 2 == 0) // if it is even element
                    return true;

                return false;
            });

            foreach (var std in filteredResult)
                Console.WriteLine(std.StudentName);

            Console.WriteLine();

            IList mixedList = new ArrayList();
            mixedList.Add(0);
            mixedList.Add("One");
            mixedList.Add("Two");
            mixedList.Add(3);


            //USING OFTYPE
            var stringResult = from s in mixedList.OfType<string>()
                               select s;

            var intResult = from s in mixedList.OfType<int>()
                            select s;

          

            foreach (var str in stringResult)
                Console.WriteLine(str);

            foreach (var integer in intResult)
                Console.WriteLine(integer);

            Console.WriteLine();
            
            //USING OrderBy

            var orderByResult = from s in studentList
                                orderby s.StudentName //Sorts the studentList collection in ascending order
                                select s;

            var orderByDescendingResult = from s in studentList //Sorts the studentList collection in descending order
                                          orderby s.StudentName descending
                                          select s;

            Console.WriteLine("Ascending Order:");

            foreach (var std in orderByResult)
                Console.WriteLine(std.StudentName);

            Console.WriteLine("Descending Order:");

            foreach (var std in orderByDescendingResult)
                Console.WriteLine(std.StudentName);

            Console.WriteLine();

            //using ThenBy

            var thenByResult = studentList.OrderBy(s => s.StudentName).ThenBy(s => s.Age);

            var thenByDescResult = studentList.OrderBy(s => s.StudentName).ThenByDescending(s => s.Age);

            Console.WriteLine("ThenBy:");

            foreach (var std in thenByResult)
                Console.WriteLine("Name: {0}, Age:{1}", std.StudentName, std.Age);


            Console.WriteLine("ThenByDescending:");
            foreach (var std in thenByDescResult)
                Console.WriteLine("Name: {0}, Age:{1}", std.StudentName, std.Age);

            Console.WriteLine();

            //using GroupBy
            var groupedResult = studentList.GroupBy(s => s.Age);

            foreach (var ageGroup in groupedResult)
            {
                Console.WriteLine("Age Group: {0}", ageGroup.Key);  //Each group has a key 

                foreach (Student s in ageGroup)  //Each group has a inner collection  
                    Console.WriteLine("Student Name: {0}", s.StudentName);


            }
        }
    }
}

   
