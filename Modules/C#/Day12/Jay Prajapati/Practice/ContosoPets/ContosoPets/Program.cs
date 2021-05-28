using ContosoPets.Data;
using System;
using ContosoPets.Models;
using System.Linq;

namespace ContosoPets
{
    class Program
    {
        static void Main(string[] args)
        {
            using ContosoPetsContext context = new ContosoPetsContext();
            //Product squeakyBone = new Product()
            //{
            //    Name = "Squeaky Dog Bone",
            //    Price = 4.99M
            //};
            //context.Products.Add(squeakyBone);
            //Product tennisBalls = new Product()
            //{
            //    Name = "Tannis Ball 3-Pack",
            //    Price = 9.99M
            //};
            //context.Add(tennisBalls);
            //context.SaveChanges();

            var squeikyBone = context.Products
                .Where(p => p.Name == "Squeaky Dog Bone")
                .FirstOrDefault();
            if(squeikyBone is Product)
            {
                //squeikyBone.Price = 7.99m;
                context.Remove(squeikyBone);
            }
            context.SaveChanges();
            


            var products = context.Products
                .Where(p => p.Price >= 5.00m)
                .OrderBy(p => p.Name);
            foreach(Product p in products)
            {
                Console.WriteLine($"Id: {p.Id}\n" +
                    $"Name: {p.Name}\n" +
                    $"Price: {p.Price}\n" +
                    new string('-',20));
                
            }
            
        }
    }
}
