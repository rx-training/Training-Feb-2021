using System;
using System.Collections.Generic;
using System.Text;

namespace AssignmentDay2
{
    class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public DateTime DOB { get; private set; }
        public string IsAdult { get; private set; }
        public string IsTodayBirth { get; private set; } = "No";
        public string ChineseSign { get; private set; }
        public string SunSign { get; private set; }
        public string DateOfBirth
        {
            get
            {
                return IsAdult;
            }
            set
            {
                DOB = Convert.ToDateTime(value);
                if ((Convert.ToInt32(DateTime.Now.Year) - Convert.ToInt32(Convert.ToDateTime(value).Year)) > 18)
                {
                    IsAdult = "Adult";
                }
                else
                {
                    IsAdult = "Not Adult";
                }

                if (DateTime.Now.Month == Convert.ToDateTime(value).Month || DateTime.Now.Day == Convert.ToDateTime(value).Day)
                {
                    IsTodayBirth = "Yes";
                }

                int year = (Convert.ToInt32(Convert.ToDateTime(value).Year)) % 12;
                switch (year)
                {
                    case 1:
                        ChineseSign = "Rooster";
                        break;
                    case 2:
                        ChineseSign = "Dog";
                        break;
                    case 3:
                        ChineseSign = "Pig";
                        break;
                    case 4:
                        ChineseSign = "Rat";
                        break;
                    case 5:
                        ChineseSign = "Ox";
                        break;                  

                }
                int month = (Convert.ToInt32(Convert.ToDateTime(value).Month));
                //int day = (Convert.ToInt32(Convert.ToDateTime(value).Day));
                switch (month)
                {
                    case 1:
                        SunSign = "Aquarius";
                        break;
                    case 2:
                        SunSign = "Pisces";
                        break;
                    case 3:
                        SunSign = "Aries";
                        break;
                    case 4:
                        SunSign = "Taurus";
                        break;
                    case 5:
                        SunSign = "Gemini";
                        break;
                }
            }
        }



        public string checkDoB
        {
            get
            {
                return IsTodayBirth;
            }
            set
            {

            }
        }
        public Person(string FirstName, string LastName, string EmailAddress)
        {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.EmailAddress = EmailAddress;

        }
        public Person(string FirstName, string LastName)
        {
            this.FirstName = FirstName;
            this.LastName = LastName;

        }
        public Person()
        {

        }


    }
}
