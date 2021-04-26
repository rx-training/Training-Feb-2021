using System;
using System.Linq;
using System.Collections.Generic;


public class Program
{
	static void Main(string[] args)
	{
		// Student collection
		IList<Student> studentList = new List<Student>() {
				new Student() { StudentID = 1, StudentName = "John", Age = 13,StandardID = 1} ,
				new Student() { StudentID = 2, StudentName = "Moin",  Age = 21, StandardID = 2 } ,
				new Student() { StudentID = 3, StudentName = "Bill",  Age = 18, StandardID = 1 } ,
				new Student() { StudentID = 4, StudentName = "Ram" , Age = 20, StandardID = 2} ,
				new Student() { StudentID = 5, StudentName = "Ron" , Age = 15, StandardID = 3 }
			};

		IList<Standard> standardList = new List<Standard>() {
				new Standard(){ StandardID = 1, StandardName="Standard 1"},
				new Standard(){ StandardID = 2, StandardName="Standard 2"},
				new Standard(){ StandardID = 3, StandardName="Standard 3"}
};

		// string collection
		IList<string> stringList = new List<string>() {
				"C# Tutorials",
				"VB.NET Tutorials",
				"Learn C++",
				"MVC Tutorials" ,
					"Java"	};

		//Linnq method to find out word that contains tutorials:
		//var result = from s in stringList
		//			 where s.Contains("Tutorials")
		//			 select s;

		var result = stringList.Where(s => s.Contains("Tutorials"));

		Console.WriteLine("\nThe word that contains Tutorials :\n");

		foreach (var str in result)
		{
			Console.WriteLine(str);
		}

		// LINQ Query Method to find out teenager students
		var teenAgerStudent = studentList.Where(s => s.Age > 12 && s.Age < 20);


		
		Console.WriteLine("\nTeen age Students:\n");

		foreach (Student std in teenAgerStudent)
		{
			Console.WriteLine(std.StudentName);
		}


		//order by :
		//ascending  order:
		Console.WriteLine("\n Getting names of student in ascending order: \n");
		var orderByResult = from s in studentList
							orderby s.StudentName //Sorts the studentList collection in ascending order
							select s;

		foreach (var std in orderByResult)
			Console.WriteLine(std.StudentName);


		//descending order:
		Console.WriteLine("\n Getting names of student in descending order: \n");
		var studentsInDescOrder = studentList.OrderByDescending(s => s.StudentName);
		foreach (var std in studentsInDescOrder)
			Console.WriteLine(std.StudentName);

		//group by:

		Console.WriteLine("\n Getting names of students in group by: \n");

		var groupedResult = studentList.GroupBy(s => s.Age);

		foreach (var ageGroup in groupedResult)
		{
			Console.WriteLine("Age Group: {0} \n", ageGroup.Key);  //Each group has a key 

			foreach (Student s in ageGroup)  //Each group has a inner collection  
				Console.WriteLine("Student Name: {0}\n", s.StudentName);
		}


		//join :
		Console.WriteLine("\n Getting names of students with their standard using Joins: \n");

		var innerJoinResult = from s in studentList // outer sequence
						join st in standardList //inner sequence 
						on s.StandardID equals st.StandardID // key selector 
						select new
						{ // result selector 
							StudentName = s.StudentName,
							StandardName = st.StandardName
						};

		foreach (var obj in innerJoinResult)
		{

			Console.WriteLine("{0} - {1}\n", obj.StudentName, obj.StandardName);
		}



		//group join:

		Console.WriteLine("\n getting the names of students with their standards using roup join \n");
		var groupJoin = from std in standardList
						join s in studentList
						on std.StandardID equals s.StandardID
						into studentGroup
						select new
						{
							Students = studentGroup,
							StandardName = std.StandardName
						};

		foreach (var item in groupJoin)
		{
			Console.WriteLine(item.StandardName);

			foreach (var stud in item.Students)
				Console.WriteLine(stud.StudentName);
		}


		//count function :

		var totalStudents = studentList.Count();

		Console.WriteLine("\nTotal Students: {0}\n", totalStudents);

		var adultStudents = studentList.Count(s => s.Age >= 18);

		Console.WriteLine("\nNumber of Adult Students: {0}\n", adultStudents);
	}
}

public class Student
{

	public int StudentID { get; set; }
	public string StudentName { get; set; }
	public int Age { get; set; }
	public int StandardID { get; set; }


}

public class Standard
{
	public int StandardID { get; set; }
	public string StandardName { get; set; }
}