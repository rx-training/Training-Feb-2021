using System;
using System.Linq;
using System.Collections.Generic;

namespace PracticeDay7
{
	public class Program
	{
		public static void Main()
		{
			// Student collection
			IList<Student> studentList = new List<Student>() {
				new Student() { StudentID = 1, StudentName = "John", Age = 18} ,
				new Student() { StudentID = 2, StudentName = "Moin",  Age = 21 } ,
				new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
				new Student() { StudentID = 4, StudentName = "Ram" , Age = 20} ,
				new Student() { StudentID = 5, StudentName = "Ron" , Age = 21 }
			};

			// LINQ Query Syntax Using Where

			var teenAgerStudent = from s in studentList
								  where s.Age > 12 && s.Age < 20
								  select s;
			Console.WriteLine("Teen age Students:");

			foreach (Student std in teenAgerStudent)
			{
				Console.WriteLine(std.StudentName);
			}


			// LINQ Query Syntax Using OderBy

			var orderByResult = from s in studentList
								orderby s.StudentName 
								select s;

			var orderByDescendingResult = from s in studentList 
										  orderby s.StudentName descending
										  select s;

			Console.WriteLine("Ascending Order:");

			foreach (var std in orderByResult)
				Console.WriteLine(std.StudentName);

			Console.WriteLine("Descending Order:");

			foreach (var std in orderByDescendingResult)
				Console.WriteLine(std.StudentName);


			// LINQ Query Syntax Using GroupBy

			var groupedResult = from s in studentList
								group s by s.Age;

			//iterate each group        
			foreach (var ageGroup in groupedResult)
			{
				Console.WriteLine("Age Group: {0}", ageGroup.Key);

				foreach (Student s in ageGroup)
					Console.WriteLine("Student Name: {0}", s.StudentName);
			}


			// LINQ Query Syntax Using Lookup

			var lookupResult = studentList.ToLookup(s => s.Age);

			foreach (var group in lookupResult)
			{
				Console.WriteLine("Age Group: {0}", group.Key);  

				foreach (Student s in group)  
					Console.WriteLine("Student Name: {0}", s.StudentName);
			}


			// LINQ Query Syntax Using Select 

			var selectResult = from s in studentList
							   select s.StudentName;

			foreach (var name in selectResult)
			{
				Console.WriteLine(name);
			}


			//LINQ Query Syntax Using All

			bool areAllStudentsTeenAger = studentList.All(s => s.Age > 12 && s.Age < 20);


			Console.WriteLine(areAllStudentsTeenAger);


			// LINQ Query Syntax Using Any

			bool isAnyStudentTeenAger = studentList.Any(s => s.Age > 12 && s.Age < 20);


			Console.WriteLine(isAnyStudentTeenAger);


			// LINQ Query Syntax Using Aggregate With Seed Value


			string commaSeparatedStudentNames = studentList.Aggregate<Student, string>(
											"Student Names: ",  // seed value
											(str, s) => str += s.StudentName + ",");

			Console.WriteLine(commaSeparatedStudentNames);


			// LINQ Query Syntax Using Average

			var avgAge = studentList.Average(s => s.Age);

			Console.WriteLine("Average Age of Student: {0}", avgAge);


			// LINQ Query Syntax Using Count

			var totalStudents = studentList.Count();

			Console.WriteLine("Total Students: {0}", totalStudents);

			var adultStudents = studentList.Count(s => s.Age >= 20);

			Console.WriteLine("Number of Adult Students: {0}", adultStudents);

		}
	}

	public class Student
	{

		public int StudentID { get; set; }
		public string StudentName { get; set; }
		public int Age { get; set; }

	}

}