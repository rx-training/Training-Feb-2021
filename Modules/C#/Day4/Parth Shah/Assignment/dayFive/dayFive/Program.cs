using System;
using System.Text.RegularExpressions;
using System.Collections.Generic;

namespace ConsoleApp2
{
    class Student
    {
        public string StudentName { get; set; }

    }

    class AgeIsNegativeException : Exception
    {
        public AgeIsNegativeException(string Message) : base(Message)
        {

        }
    }
    class InvalidDateException : Exception
    {
        public InvalidDateException(string message) : base(message)
        {

        }
    }


    class InvalidStudentNameException : Exception
    {
        public InvalidStudentNameException(string name) : base(String.Format("\nInvalid Student Name: {0}", name))
        {
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Student newStudent = new Student();
            Console.WriteLine("Enter the student name, Should be alphabetic : ");
            newStudent.StudentName = Convert.ToString(Console.ReadLine().Trim());
            Console.WriteLine("\n");
            Console.WriteLine("Enter the student age ");
            int age = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("\n");
            var date = DateTime.Now;
            Console.Write("\n Enter a month of registration: ");
            int month = int.Parse(Console.ReadLine());
            Console.Write("\nEnter a day of registration: ");
            int day = int.Parse(Console.ReadLine());
            Console.Write("\nEnter a year of registration: ");
            int year = int.Parse(Console.ReadLine());

            DateTime inputtedDate = new DateTime(year, month, day);

            try
            {
                if (inputtedDate < date)
                {
                    throw new InvalidDateException("\nDate can't be in the past");

                }
                else
                {
                    Console.WriteLine("\nDate is Perfect");
                }
            }
            catch (InvalidDateException ex)
            {

                Console.WriteLine(ex.Message);
            }

            try
            {
                ValidateStudent(newStudent);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error:" + ex.Message);
            }


            try
            {
                if (age < 0)
                {
                    throw new AgeIsNegativeException("\n Age cant be negative ");
                }
                else
                {
                    Console.WriteLine("\nAge is Perfect!");
                }

            }
            catch (AgeIsNegativeException ex)
            {
                Console.WriteLine(ex.Message);
            }

            Console.ReadLine();

        }
        private static void ValidateStudent(Student std)
        {

            if (!Regex.IsMatch(std.StudentName, "^[a-zA-Z]+$"))
            {
                Console.WriteLine(new InvalidStudentNameException(std.StudentName).Message);
            }
            else
            {
                Console.WriteLine("\nName is Perfect");
            }
            
        }
    }
}

