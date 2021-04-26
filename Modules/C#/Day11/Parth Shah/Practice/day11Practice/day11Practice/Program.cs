using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using day11Practice.Model;

namespace day11Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello User!");
            //practice to inserting data on Employees table:

            //void inserData()
            //{
                using (var context = new DemoDay10Context())
                {


                    var employee = new Employee();


                    {

                        Console.WriteLine("Enter Employee ID");
                       decimal empId = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter Employee First Name :");
                        string EmpName = Console.ReadLine();
                        Console.WriteLine("Enter Employee Last Name :");
                        string EmpLast = Console.ReadLine();
                        Console.WriteLine("Enter Employee Email ID :");
                        string EmpEmail = Console.ReadLine();
                        Console.WriteLine("Enter Employee Phone number :");
                        string PhoneNo = Console.ReadLine();
                        Console.WriteLine("Enter Employee Date :");
                        DateTime date = Convert.ToDateTime(Console.ReadLine());
                        Console.WriteLine("Enter Job ID :");
                        string JobID = Console.ReadLine();
                        Console.WriteLine("Enter Salary");
                        decimal Sal = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter Commission Pt");
                        decimal cpt = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter Manager ID");
                        decimal manager = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter Department ID");
                        decimal deptId = Convert.ToInt32(Console.ReadLine());


                        employee.EmployeeId = empId;
                        employee.FirstName = EmpName;
                        employee.LastName = EmpLast;
                        employee.Email = EmpEmail;
                        employee.PhoneNumber = PhoneNo;
                        employee.HireDate = date;
                        employee.JobId = JobID;
                        employee.Salary = Sal;
                        employee.CommissionPct = cpt;
                        employee.ManagerId = manager;
                        employee.DepartmentId = deptId;
                 };
                    // or
                    context.Employees.Add(employee);

                    int res = context.SaveChanges();

                    if (res > 0)
                    {

                        Console.WriteLine("Data Inserted Successfully");

                    }
                    else
                    {

                        Console.WriteLine("Try Again!!!");

                    }

                }


            //delete record 
            //void deleteData()
            //{
                using (var context = new DemoDay10Context())
                {

                    Console.WriteLine("Enter Name of Employee which u want to delete :");
                    string empName = (Console.ReadLine());
                    var employee = context.Employees.Where(d => d.FirstName == empName).First();
                    context.Employees.Remove(employee);
                    context.SaveChanges();



                }
            //}


          // Find a report of patient assigned to a particular doctor

        }





    }
    }
//}
