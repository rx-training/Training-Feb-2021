using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using day12Assignment.Models;
using Microsoft.EntityFrameworkCore;

namespace day12Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            var toyCompabyDb = new toyCompanyDbContext();
            //view all toys products :
            Console.WriteLine("\n================================================================");
            Console.WriteLine("Who are you?");
            Console.WriteLine("\n1.Customer \n2.Admmin\n.3.ForExit");
            int who = Convert.ToInt32(Console.ReadLine());

            while(who != 3)
            {
                switch (who)
                {
                    case 1:
                        Customer();
                        break;

                    case 2:
                        Admin();
                        break;

                    default:
                        break;
                }
                Console.WriteLine("\n================================================================");

                Console.WriteLine("Who are you?");
                Console.WriteLine("\n1.Customer \n2.Admmin\n.3.ForExit");
                who = Convert.ToInt32(Console.ReadLine());
            }
           
           

            void Admin()
            {
                Console.WriteLine("\n================================================================");

                Console.WriteLine("Hello Admin!");

                Console.WriteLine("------Welcome ------\n\n");
                Console.WriteLine("Choose one operations:\n ");
                Console.WriteLine("\n1.See All list pf Customer \n 2.Add orders \n 3.Add toys \n 4. See customer with order details \n 5.exit");
                Console.WriteLine("Operations:  ");
                int op2 = Convert.ToInt32(Console.ReadLine());

                while (op2 != 5)
                {
                    switch (op2)
                    {
                        case 1:
                            CustomerList();
                            break;

                        case 2:
                            AddOrder();
                            break;

                        case 3:
                            AddToys();
                            break;

                        case 4:
                            getCustomerProduct();
                            break;

                        default:
                            break;
                    }
                    Console.WriteLine("\n================================================================");

                    Console.WriteLine("Hello Admin!");

                    Console.WriteLine("------Welcome ------\n\n");
                    Console.WriteLine("Choose one operations:\n ");
                    Console.WriteLine("\n1.See All list pf Customer \n 2.Add orders \n 3.Add toys \n 4. See customer with order details \n 5.exit");
                    Console.WriteLine("Operations:  ");
                     op2 = Convert.ToInt32(Console.ReadLine());
                }

                void CustomerList()
                {

                    var list = toyCompabyDb.Customers.FromSqlRaw("exec GettingCustomers");

                    foreach (var item in list)
                    {
                        Console.WriteLine("CustomerID :" + item.CustomerID + "   Customer-Name :  " + item.CustomerName + "   Toy-id :  " + item.toyId);
                    }
                }

                void AddOrder()
                {
                    Console.WriteLine("\n================================================================");

                    Console.WriteLine("Enter toy Price");
                    int totalPrice = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter CustomerID Id of your respective toy ");
                    int CustoId = Convert.ToInt32(Console.ReadLine());
                    var o = new order() { totalPrice = totalPrice , CustomerID = CustoId };
                    var cust = toyCompabyDb.Customers.FromSqlRaw("exec insertingOrder {0} {1}", o.totalPrice, o.CustomerID);
                    toyCompabyDb.Orders.Add(o);
                    toyCompabyDb.SaveChanges();
                }

                void AddToys()
                {
                    Console.WriteLine("\n================================================================");

                    Console.WriteLine("Enter ToyName :");
                    string ToyName = Console.ReadLine();
                    Console.WriteLine("Enter TotalPrice :");
                    int TotalPrice = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter plantId ");
                    int plant = Convert.ToInt32(Console.ReadLine());
                    var t = new toys() { toyName = ToyName, toyPrice = TotalPrice, PlantId = plant };
                    var toy = toyCompabyDb.Toys.FromSqlRaw("exec insertingToys {0} {1} {2}",t.toyName,t.toyPrice,t.PlantId);
                    toyCompabyDb.Toys.Add(t);
                    toyCompabyDb.SaveChanges();
                }

                //getting records of customer and products 

                void getCustomerProduct()
                {
                    var lists = toyCompabyDb.vToys.FromSqlRaw("exec seeCustomerAndProduct").ToList();

                    foreach (var item in lists)
                    {
                        Console.WriteLine("Customer Id :" + item.CustomerID + "   Customer Name: " + item.CustomerName + "   Toy Name :" + item.toyName + "  Toy - Price :  " + item.toyPrice);
                    }
                }

            }
            void Customer()
            {
                Console.WriteLine("\n================================================================");
                Console.WriteLine("Hello Customer!");

            Console.WriteLine("------Welcome ------\n\n");
            Console.WriteLine("Choose one operations:\n ");
            Console.WriteLine("\n1.See All Products \n 2.Place Order \n 3.Search Product \n 4.exit");
            Console.WriteLine("Operations:  ");
            int op = Convert.ToInt32(Console.ReadLine());

            while (op != 4)
            {
                switch (op)
                {
                    case 1:
                        gettingToys();
                        break;

                    case 2:
                        placeOrder();
                        break;

                    case 3:
                        searchToyProduct();
                        break;

                    default:
                        break;
                }
                    Console.WriteLine("\n================================================================");

                    Console.WriteLine("------Welcome ------\n\n");
                Console.WriteLine("Choose one operations:\n ");
                Console.WriteLine("\n1.See All Products \n 2.Place Order \n 3.Search Product \n 4.exit");
                Console.WriteLine("Operations:  ");
                 op = Convert.ToInt32(Console.ReadLine());
            }




                void gettingToys()
            { 
            var list = toyCompabyDb.Toys.FromSqlRaw("exec GettingToys");

            foreach(var item in list)
            {
                Console.WriteLine("ToyID :"+ item.toyId + "   Toy-Name :  " + item.toyName + "   Toy-Price :  " + item.toyPrice);
            }
            }



            //palce an order 
            void placeOrder()
            {
                    Console.WriteLine("\n================================================================");

                    Console.WriteLine("Enter your Name");
                string CustName = Console.ReadLine();
                Console.WriteLine("Toy will be identified by their id so please view id on all products");
                Console.WriteLine("Enter toy Id of your respective toy ");
                int toyId = Convert.ToInt32(Console.ReadLine());
                var c = new customer() { CustomerName = CustName, toyId = toyId };
                var cust = toyCompabyDb.Customers.FromSqlRaw("exec insertingCustomer {0} {1}", c.CustomerName, c.toyId);
                toyCompabyDb.Customers.Add(c);
                toyCompabyDb.SaveChanges();
            }
                ////delete Customer

                //Console.WriteLine("Enter Name of Customer which u want to delete :");
                //string custName = (Console.ReadLine());
                //var custo = toyCompabyDb.Customers.FromSqlRaw("exec DeleteCustomer  {0}", custName);
                //toyCompabyDb.Customers.Remove((customer)custo);
                //toyCompabyDb.SaveChanges();

               
            //search order :

            void searchToyProduct()
            { 
            Console.WriteLine("Enter the Product name u want to search: ");
            string prodNAme = Console.ReadLine();
            var name = prodNAme;

            var products = toyCompabyDb.Toys.FromSqlRaw($"exec searchProduct {name}").ToList();
             
            foreach (var item in products)
            {
                Console.WriteLine("ToyID :" + item.toyId + "   ToyName :  " + item.toyName);
            }
            }
                //see order and Customer relationship:
            }
        }
    }
}
