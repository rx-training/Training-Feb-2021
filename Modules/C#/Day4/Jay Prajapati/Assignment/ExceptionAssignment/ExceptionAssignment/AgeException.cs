using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.Text.RegularExpressions;
using System.Text;

namespace ExceptionAssignment
{
    public class Student
    {
        private string Name { get; set; }
        private int Age { get; set; }
        private DateTime date { get; set; }
        public string getName
        {
            get
            {
                return Name;
            }
            set
            {
                try
                {
                    bool IsValid = Regex.IsMatch(value, @"^[a-zA-Z]+$");
                    if (!IsValid)
                    {
                        throw new NameException("Name Should Only Contain Alphabet Characters..");
                    }
                    else
                    {
                        Name = value;
                    }  
                }
                catch (Exception e)
                {
                    Console.WriteLine($"Exception Occurs : {e.Message}");
                }
            }
        }
        public int getAge
        {
            get
            {
                return Age;
            }
            set
            {
                try
                {
                    if (value == 0)
                    {
                        throw new AgeException("Age Can't be Zero");
                    }
                    else
                    {
                        Age = value;
                    }
                }catch (AgeException ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }
        public DateTime GetDate
        {
            get
            {
                return date;
            }
            set
            {
                try
                {
                    if(DateTime.Now > value.Date)
                    {
                        throw new DateException("Date Must be After the Current Date");
                    }
                    else
                    {
                        date = value;
                    }
                }catch(Exception e)
                {
                    Console.WriteLine($"Exception Occur : {e.Message}");
                }
            }
        }
    }
    public class AgeException : Exception
    {
        public AgeException(string message) : base(message)
        {

        }
    }
}
