

//Create a list which will store 5 student names and then display it search it index number
using System;
using System.Collections.Generic;
namespace ForgetCode
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            List<String> userList = new List<String>();

            Console.WriteLine("Please Enter a Student Name");
            String input = Console.ReadLine();
            userList.Add(input);

            String inputNewUser = Console.ReadLine();
            userList.Add(inputNewUser);
            String inputUser2 = Console.ReadLine();
            userList.Add(inputUser2);
            String inputUser3 = Console.ReadLine();
            userList.Add(inputUser3);
            String inputUser4 = Console.ReadLine();
            userList.Add(inputUser4);

            Console.WriteLine("Please Enter a Student Name  whose index you want to search:");
            string indexNum = Console.ReadLine();
            if (indexNum == input)
            {
                int index = userList.FindIndex(a => a.Contains(input));
                Console.WriteLine("List Item " + input +" Found at index: " + index);

            }
            else if (indexNum == inputNewUser)
            {
                int index = userList.FindIndex(a => a.Contains(inputNewUser));
                Console.WriteLine("List Item " + inputNewUser + " Found at index: " + index);
            }
            else if (indexNum == inputUser2)
            {
                int index = userList.FindIndex(a => a.Contains(inputUser2));
                Console.WriteLine("List Item " + inputUser2 + " Found at index: " + index);
            }
            else if (indexNum == inputUser3)
            {
                int index = userList.FindIndex(a => a.Contains(inputUser3));
                Console.WriteLine("List Item " + inputUser3 + " Found at index: " + index);
            }
            else if (indexNum == inputUser4)
            {
                int index = userList.FindIndex(a => a.Contains(inputUser4));
                Console.WriteLine("List Item " + inputUser4 + " Found at index: " + index);
            }


            else
            {
                Console.WriteLine("user is not found");
            }

            

            foreach (var user in userList)
            {
                Console.WriteLine("The Student that was added to the list is :" + " " +user);
            }

        }
    }
}