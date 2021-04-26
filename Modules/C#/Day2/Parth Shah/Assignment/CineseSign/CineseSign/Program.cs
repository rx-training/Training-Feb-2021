using System;
using ZodiacChinese;

namespace CineseSign
{
    public class Persons
    {
        public string firstname
        {
            get;
            set;
        }

        public string lastname
        {
            get;
            set;
        }

        public string email
        {
            get;
            set;
        }
        public DateTime dateofbirth
        {
            get;
            set;
        }
        public int dayofbirth
        {
            get => Convert.ToInt32(this.dateofbirth.Day);
        }

        public string monthbfbirth
        {
            get => this.dateofbirth.ToString("MMMM");
        }

        public int monthofDOB
        {
            get => Convert.ToInt32(this.dateofbirth.Month);
        }

        public int yearofDOB
        {
            get => Convert.ToInt32(this.dateofbirth.Year);
        }

        public Persons() { }
        public Persons(string firstname, string lastname, string email, DateTime dateofbirth)
        {
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.dateofbirth = dateofbirth;


        }

        public Persons(string firstname, string lastname, string email)
        {
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
        }

        public Persons(string firstname, string lastname, DateTime dateofbirth)
        {
            this.firstname = firstname;
            this.lastname = lastname;
            this.dateofbirth = dateofbirth;

        }

        public DateTime CurDate = DateTime.Now;
        public string Isadult
        {
            get
            {
                if ((CurDate.Year - this.dateofbirth.Year) > 18)
                {
                    return "Adult";
                }
                return "Minor";
            }
            private set {; }
        }

        public string zodiac
        {
            get
            {
                Zodiac z = new Zodiac();
                return (z.zodiacSign(dayofbirth, monthbfbirth));
            }
        }

        public string chinese
        {
            get
            {
                Zodiac z = new Zodiac();
                return (z.chineseSign(yearofDOB));
            }
        }

        public string screenname
        {
            get => $"{this.firstname}{this.lastname}{monthofDOB}{dayofbirth}{yearofDOB}";
        }
        public bool birthday
        {
            get
            {
                DateTime today = DateTime.Today;
                if (today == dateofbirth)
                {
                    return true;
                }
                return false;
            }
        }
    }

    class Program       
    { 
     static void Main(string[] args)
        {
                Persons[] p = new Persons[2];
            for (int i = 0; i < 2; i++)
            {
                Console.WriteLine("Enter ur Fisrt name LastName EmailAddress and DateOfBirth");
              p[i] = new Persons() 
                { firstname = Console.ReadLine(), lastname = Console.ReadLine(), email = Console.ReadLine(), dateofbirth = Convert.ToDateTime(Console.ReadLine()) };
          
            }
                 Console.WriteLine("Name\t\temail\t\tDateOfBirth\t\tIAdult?\t\tZodiac\t\tChinese\t\tScreenName\tBday");
            foreach ( var item in p)
                {
                    
                    Console.Write($"{item.firstname}{item.lastname}");
                    Console.Write($"\t\t{item.email}");
                    Console.Write($"\t\t{ item.dateofbirth.Day}/{ item.dateofbirth.Month}/{ item.dateofbirth.Year}");
                    Console.Write($"\t\t{item.Isadult}");
                    Console.Write($"\t\t{item.zodiac}");
                    Console.Write($"\t\t{item.chinese}");
                    Console.Write($"\t\t{item.screenname}");
                    Console.Write($"\t{ item.birthday}\n");
                }
              
            }

        }
    }
    

