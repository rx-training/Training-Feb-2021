using System;
using AssignmentDay12.Models;
using System.Linq;

namespace AssignmentDay12
{
    class Program
    {
        public static object Cid { get; private set; }

        static void Main(string[] args)
        {
            int cid = 1;
            Console.WriteLine("\n1. Display Products\n" +
                "2. Display Customer Details\n" +
                "3. Display Order Details\n" +
                "4. Place The Order\n" +
                "5. Exit\n");
            Console.Write("Choose Option: ");
            int op1 = Convert.ToInt32(Console.ReadLine());
            while (op1 != 5)
            {
                switch (op1)
                {
                    case 1:
                        DisplayProducts();
                        break;
                    case 2:
                        CustomerDetails(Cid);
                        break;
                    case 3:
                        OrderDetails(Cid);
                        break;
                    case 4:
                        PlaceOrder(Cid);
                        break;
                    default:
                        Console.WriteLine("Please Select Valid Option");
                        break;
                }

                Console.WriteLine("\n1. Display Products\n" +
                    "2. Display Customer Details\n" +
                    "3. Display Order Details\n" +
                    "4. Place The Order\n" +
                    "5. Exit\n");
                Console.Write("Choose Option: ");
                op1 = Convert.ToInt32(Console.ReadLine());
            }



        }

        private static void PlaceOrder(object cid)
        {
            throw new NotImplementedException();
        }

        private static void OrderDetails(object cid)
        {
            throw new NotImplementedException();
        }

        private static void CustomerDetails(object cid)
        {
            throw new NotImplementedException();
        }

        public static int Login()
        {
            Console.WriteLine("Enter Your CustomerId");
            int id = Convert.ToInt32(Console.ReadLine());
            return id;
        }

        public static int SignUp()
        {
            using ToyDBContext context = new ToyDBContext();
            var c = new Customer();
            Console.Write("Enter FirstName : ");
            c.FirstName = Console.ReadLine();
            Console.Write("Enter LastName : ");
            c.LastName = Console.ReadLine();

            context.Add(c);
            context.SaveChanges();
            int id = context.Customers
              .Where(s => s.FirstName == c.FirstName || s.LastName == c.LastName)
              .FirstOrDefault().Id;
            return id;
        }
        public static void DisplayProducts()
        {
            using ToyDBContext context = new ToyDBContext();
            var products = context.Toys.ToList();
            if (products.Count > 0)
            {

                foreach (var p in products)
                {
                    Console.WriteLine($"{p.Id}\t{p.Name}\t{p.PlantName}\t{p.Price}\t{p.QuantityAvailable}");
                }
            }
            else
            {
                Console.WriteLine("No Product Available at this time");
            }
        }
        public static void CustomerDetails(int Id)
        {
            using ToyDBContext context = new ToyDBContext();
            var D = context.Customers
                                  .Where(s => s.Id == Id)
                                  .FirstOrDefault();

            Console.WriteLine($"Id : {D.Id}\n" +
                $"Name : {D.FirstName} {D.LastName}\n" +
                $"Address : {D.Address}");
        }
        public static void OrderDetails(int Id)
        {
            using ToyDBContext context = new ToyDBContext();
            var Details = context.ProductOrders
                                  .Where(s => s.Id == Id)
                                  .ToList();
            if (Details.Count > 0)
            {

                foreach (var p in Details)
                {
                    Console.WriteLine($"{p.OrderId}\t{p.Toy.Id}\t{p.Toy.Name}\t{p.Quantity}\t{p.order.OrderPlaced}");
                }
            }
            else
            {
                Console.WriteLine("No Order Detail Available at this time");
            }
        }
        public static void PlaceOrder(int id)
        {
            using ToyDBContext context = new ToyDBContext();
            DisplayProducts();
            Console.WriteLine("\n\nEnter ProductId");
            int Pid = Convert.ToInt32(Console.ReadLine());
            var Products = context.Toys
                                  .Where(s => s.Id == Pid)
                                  .FirstOrDefault();

            if (Products is Toy)
            {
                Console.Write("Enter Qnty : ");
                int Qnty = Convert.ToInt32(Console.ReadLine());
                if (Products.QuantityAvailable >= Qnty)
                {
                    var totalQnty = Products.QuantityAvailable;
                    Products.Id = Pid;
                    Products.QuantityAvailable = totalQnty - Qnty;


                    context.Toys.Update(Products);
                    context.SaveChanges();

                    var order = new Order()
                    {
                        CustomerId = id,
                        OrderPlaced = DateTime.Now
                    };
                    context.Orders.Add(order);
                    context.SaveChanges();
                }
                else
                {
                    Console.WriteLine("Items are Not Available now");
                }
            }
            else
            {
                Console.WriteLine("No Such Product Available");
            }
            context.SaveChanges();



        }
    }
}