using System;

namespace Practice
{
    class Car
    {
        public string model;

        // Create a class constructor with a parameter
        public Car(string modelName)
        {
            model = modelName;
        }

        static void Main(string[] args)
        {
            Car Ford = new Car("Mustang");
            Console.WriteLine(Ford.model);
        }
    }
}