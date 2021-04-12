using System;

namespace day3Practice
{
    class Vehicle  // base class (parent) 
    {
        public string brand = "Ford";  // Vehicle field
        public void honk()             // Vehicle method 
        {
            Console.WriteLine("Tuut, tuut!");
        }
    }

    class Car : Vehicle  // derived class (child)
    {
        public string modelName = "Mustang";  // Car field
    }
    public class Employee
    {
        public float salary = 40000;
    }
    public class Programmer : Employee
    {
        public float bonus = 10000;
    }

    //polymorphism example :


    class Program
    {
        static void Main(string[] args)
        {
            Programmer p1 = new Programmer();

            Console.WriteLine("Salary: " + p1.salary);
            Console.WriteLine("Bonus: " + p1.bonus);

            // Create a myCar object
            Car myCar = new Car();

            // Call the honk() method (From the Vehicle class) on the myCar object
            myCar.honk();

            // Display the value of the brand field (from the Vehicle class) and the value of the modelName from the Car class
            Console.WriteLine(myCar.brand + " " + myCar.modelName);



            Animal myAnimal = new Animal();  // Create a Animal object
            Animal myPig = new Pig();  // Create a Pig object
            Animal myDog = new Dog();  // Create a Dog object

            myAnimal.animalSound();
            myPig.animalSound();
            myDog.animalSound();


           
        }
    }
}
