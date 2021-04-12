using System;
using System.Collections.Generic;
/*Store a product information in map object. Key will be a product item and v
 * alue will be the price of that product. Search the product by product name. 
 */
namespace day5practice3
{

    class Program


    {
        static void Main(string[] args)
        {
            // Use Dictionary as a map.
            var map = new Dictionary<string, int>();

            // ... Add some keys and values.
            Console.WriteLine("Enter a Product Name 1:");
            string product1 = Console.ReadLine();
            Console.WriteLine("Enter a Product Price 1:");
           int price1 = Convert.ToInt32(Console.ReadLine());
            map.Add(product1, price1);

            Console.WriteLine("Enter a Product Name 2:");
            string product2 = Console.ReadLine();
            Console.WriteLine("Enter a Product Price 2:");
            int price2 = Convert.ToInt32(Console.ReadLine());
            map.Add(product2, price2);

            Console.WriteLine("Enter a Product Name 3:");
            string product3 = Console.ReadLine();
            Console.WriteLine("Enter a Product Price 3:");
            int price3 = Convert.ToInt32(Console.ReadLine());
            map.Add(product3, price3);


            // ... Loop over the map.
            foreach (var pair in map)
            {
                string key = pair.Key;
                int value = pair.Value;
                Console.WriteLine(key + "/" + value);
            }

            // ... Get value at a known key.

            Console.WriteLine("\nEnter Product Name and Find The Price : \n");
            string result = Console.ReadLine();

            if (result == product1)
            {
                int results = map[product1];
                Console.WriteLine("\nThe price is: "+results);
            }                     
            else if (result == product2)
            {                     
                int results = map[product2];
                Console.WriteLine("\nThe price is: " + results);
            }                     
            else if (result == product3)
            {                     
                int results = map[product3];
                Console.WriteLine("\nThe price is: " + results);
            }
            else
            {
                Console.WriteLine("sorry wrong input ");
            }






        }
    }
}

