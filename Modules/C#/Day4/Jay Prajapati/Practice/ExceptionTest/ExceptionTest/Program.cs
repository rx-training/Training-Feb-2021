using System;

namespace ExceptionTest
{
    public class Person
    {
        private string _name;

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        public override int GetHashCode()
        {
            return this.Name.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            // This implementation contains an error in program logic:
            // It assumes that the obj argument is not null.
            Person p = (Person)obj;
            if (p == null)
                return false;
            else
                return this.Name.Equals(p.Name);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Tester test = new Tester();
            test.Method1();
                 





            //int x = 0;


            //Person p1 = new Person();
            //p1.Name = "John";
            //Person p2 = null;

            // The following throws a NullReferenceException.


            //Console.WriteLine("p1 = p2: {0}", p1.Equals(p2));
            //try
            //{
            //    int y = 100 / x;
            //}
            //catch(ArithmeticException e)
            //{
            //    Console.WriteLine($"ArithmeticException Handler: {e}");
            //}
            //catch(Exception e)
            //{
            //    Console.WriteLine($"Generic Exception Handler: {e}");
            //}
        }
    }
}
