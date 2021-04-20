using System;
using day11assignment.Model;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace day11assignment
{
   
    class Program
    {
        static void Main(string[] args)
        {

            HospitalsContext HospitalsContext = new HospitalsContext();
            Console.WriteLine("Hello User!");

            Console.WriteLine("------Welcome ------\n\n");
            Console.WriteLine("Choose one operations:\n ");
            Console.WriteLine("\n1.Insert \n 2.Update \n 3.Delete \n 4. View patient assignd to doctors \n 5. View medicines assigned to patient \n 6.exit");
            Console.WriteLine("Operations:  ");
            int op = Convert.ToInt32(Console.ReadLine());
            while (op != 6)
            {
                switch (op)
                {
                    case 1:
                        inserData();
                        break;

                    case 2:
                        updateData();
                        break;

                    case 3:
                        deleteData();
                        break;

                    case 4:
                        findPatients();
                        break;

                    case 5:
                        findMedicines();
                        break;


                    default:
                        break;
                }

                Console.WriteLine("------Welcome ------\n\n");
                Console.WriteLine("Choose one operations:\n ");
                Console.WriteLine("\n1.Insert \n 2.Update \n 3.Delete \n 4. View patient assignd to doctors \n 5. View medicines assigned to patient \n 6.exit");
                Console.WriteLine("Operations:  ");
                 op = Convert.ToInt32(Console.ReadLine());
            }
            

                    //insert a doctor :
                void inserData()
            { 
            using (var context = new HospitalsContext())
            {


                var doctor = new Doctor();


                {

                    Console.WriteLine("Enter Doctor ID");
                    int docId = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter Dr. Name :");
                    string DrName = Console.ReadLine();
                    Console.WriteLine("Enter Departments ID");
                    int depId = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Enter Gender :");
                    string gender = Console.ReadLine();
                    Console.WriteLine("Enter esignation :");
                    string Desig = Console.ReadLine();

                    doctor.DrId = docId;
                    doctor.DrName = DrName;
                    doctor.DeptId = depId;
                    doctor.Gender = gender;
                    doctor.Designation = Desig;
                };
                // or
                HospitalsContext.Doctors.Add(doctor);

                int res = HospitalsContext.SaveChanges();

                if (res > 0)
                {

                    Console.WriteLine("Data Inserted Successfully");

                }
                else
                {

                    Console.WriteLine("Try Again!!!");

                }

            }

            }
            //updating dr . data :

            void updateData()
            {
                using (var context = new HospitalsContext())
                {

                  
                        //var doctor = context.Doctors.First<Doctor>();
                        Console.WriteLine("Enter Id in which u want to update data :");
                        int v = Convert.ToInt32(Console.ReadLine());
                        Doctor d = context.Doctors.FirstOrDefault(f=> f.DrId == v);
                        if (d != null)
                        { 
                        Console.WriteLine("What u want to update ? Press 1. for Name 2. For DepartmentId 3. Gender 4. Designation: ");
                        int option = Convert.ToInt32(Console.ReadLine());
                        if (option == 1)
                        {
                            Console.WriteLine("Enter updated Name : ");
                            string upName = Console.ReadLine();
                            d.DrName = upName;
                            context.Doctors.Update(d);

                            HospitalsContext.SaveChanges();

                            Console.WriteLine(d.DrId + " " + d.DrName + " " + d.DeptId + " " + d.Designation);
                        }
                        else if (option == 2)
                        {
                            Console.WriteLine("Enter Department ID");
                            int updeptId = v;
                            d.DeptId = updeptId;
                        }
                        else if (option == 3)
                        {
                            Console.WriteLine("Enter updated Gender Name : ");
                            string upGender = Console.ReadLine();
                            d.Gender = upGender;
                        }
                        else if (option == 4)
                        {
                            Console.WriteLine("Enter updated Designation : ");
                            string upDesig = Console.ReadLine();
                            d.Designation = upDesig;
                        }
                        else
                        {
                            Console.WriteLine("Invalid Choice Bro");
                        }

                    }
                        else
                        {
                            Console.WriteLine("Not contain any value: ");
                        }
                                       

                   
                }

            }
            //delete record 
            void deleteData()
            { 
            using (var context = new HospitalsContext())
            {

                Console.WriteLine("Enter Name of Doctor which u want to delete :");
                string delName = (Console.ReadLine());
                var doctor = context.Doctors.Where(d => d.DrName == delName).First();
                context.Doctors.Remove(doctor);
                context.SaveChanges();



            }
            }

            // Find a report of patient assigned to a particular doctor
            void findPatients()
            { 
            Console.WriteLine(" Find a report of patient assigned to a particular doctor ");
            Console.WriteLine("====================================================");
            var CombineData = HospitalsContext.Patients.Include(p => p.Dr);
            foreach (var item in CombineData)
            {
                
                Console.WriteLine("Patient Name : " + item.PName + " " + " Assigned Doctor : " + item.Dr.DrName);
            }
            }

            //Find a report of medicine list for a particular patient

            void findMedicines()
            { 
            Console.WriteLine(" Find a report of medicine list for a particular patient ");
            Console.WriteLine("====================================================");
            var MedicinePatient = HospitalsContext.Patients.Include(p => p.Drug);
            foreach (var item in MedicinePatient)
            {
               
                Console.WriteLine("Patient Name : " + item.PName + " " + " Assigned Medicines : " + item.Drug.DrugName);
            }

            }

        }

    }
}


//foreach (var item in HospitalsContext.Patients)
//{
//    Console.WriteLine(item.PId + " " + item.PName);
//}

//update patients
//var result = HospitalsContext.Patients.Single(p => p.PId == 1);
//result.PName = "Mansukhbhai";
//Console.WriteLine("Result");
//Console.WriteLine(result.PId + " " + result.PName + " " + result.DrId);


//Add patient :
//Patient patient = new Patient() { PId = 5, PName = "Haribhai", DeptId = 1, DrId = 1, DrugId = 3 };
//HospitalsContext.Patients.Add(patient);
//HospitalsContext.SaveChanges();

//Insert Doctor
//Doctor doctor = new Doctor() { DrId = 5, DrName = "Yashvee", DeptId = 2, Gender = "F", Designation = "Homeopathic" };
//HospitalsContext.Doctors.Add(doctor);
//HospitalsContext.SaveChanges();