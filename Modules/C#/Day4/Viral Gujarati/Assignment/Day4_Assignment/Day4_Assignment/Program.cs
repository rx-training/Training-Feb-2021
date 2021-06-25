using System.Text.RegularExpressions;
using System;

namespace Day4_Assignment
{
    class Day4
    {
        public class Student
        {
            public string Name { get; set; }
            public int Age { get; set; }
            public DateTime Date { get; set; }

            public void ValName()
            {
                bool IsValid = Regex.IsMatch(Name, @"^[a-zA-Z]+$");
                if (!IsValid)
                {
                    throw new NameException("Name Should Only Contain Alphabet Characters..");
                }
            }


            public void ValAge()
            {
                if (Age <= 0)
                {
                    throw new AgeException("Age should not be less than or equal to 0");
                }
            }

            public void ValDate()
            {
                int result = DateTime.Compare(Date, System.DateTime.Now);
                if (result < 0)
                {
                    throw new DateException("Date should not be less than current date");
                }
            }

        }

        public class AgeException : Exception
        {
            public AgeException(string message) : base(message) { }
        }

        public class NameException : Exception
        {
            public NameException(string message) : base(message) { }
        }

        public class DateException : Exception
        {
            public DateException(string message) : base(message) { }
        }

        static void Main(string[] args)
        {
            var student = new Student();
            try
            {


                Console.Write("Enter Name : ");
                student.Name = Console.ReadLine();

                student.ValName();
            }
            catch (NameException excep)

            {
                Console.WriteLine(excep.Message);
            }
            try
            {
                Console.Write("Enter Age : ");
                student.Age = Convert.ToInt32(Console.ReadLine());
                student.ValAge();
            }
            catch (AgeException excep)
            {
                Console.WriteLine(excep.Message);
            }
            try
            {

                Console.Write("Enter Current Date : ");
                student.Date = Convert.ToDateTime(Console.ReadLine());
                student.ValDate();
            }
            catch (DateException excep)
            {
                Console.WriteLine(excep.Message);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
