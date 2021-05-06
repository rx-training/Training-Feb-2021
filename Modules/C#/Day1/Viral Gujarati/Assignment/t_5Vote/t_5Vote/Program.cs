using System;  
public class t_5vote
{
    public static void Main( string[] args)
    {
        string vote_age;

        Console.Write("Enter the age  : ");

        int age = Convert.ToInt32(Console.ReadLine());
        
        vote_age = age > 18 ? "You are eligible for voting" : "You are not eligible for voting";
        Console.WriteLine(vote_age);


        //if (vote_age < 18)
        //{
        //   Console.Write("Sorry, You are not eligible to vote.\n");
        //}
        //else
        //  Console.Write("Congratulation! You are eligible for voting.\n\n");
    }
}
