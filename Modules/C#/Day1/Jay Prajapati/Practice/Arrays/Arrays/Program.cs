using System;
using System.Collections.Generic;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            var items = new Item[5];
            Random r = new Random();
            for (int i = 0; i < items.Length; i++)
            {
                items[i] = new Item(r.Next());
            }
            Console.WriteLine("Items : ");
            foreach (var item in items)
            {
                Console.WriteLine($"Item ID : {item.ID}, ");
            }
        }
    }
    
    internal class Item
    {
        public int ID { get; set; }
        public Item(int id)
        {
            ID = id;
        }
    }
}
