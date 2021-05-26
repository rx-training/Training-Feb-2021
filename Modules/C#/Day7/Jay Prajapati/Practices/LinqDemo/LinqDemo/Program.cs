using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;

namespace LinqDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            var primes = new List<int> { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 };
            var query = from val in primes
                        where val < 13
                        select val;
            foreach (var item in query)
            {
                Console.WriteLine($"{item}");
            }

            // Method Query
            var methodQuery = primes.Where(x => x < 13);
            foreach (var item in methodQuery)
            {
                Console.WriteLine(item);
            }

            // Double Methods 
            Console.WriteLine("Double Methods : ");
            var query1 = from method in typeof(double).GetMethods()
                        orderby method.Name
                        group method by method.Name into groups
                        select new { MethodName = groups.Key, NumberofOverloads = groups.Count() };
            foreach (var item in query1)
            {
                Console.WriteLine(item);
            }


            var listOne = Enumerable.Empty<int>();
            var listTwo = Enumerable.Range(1, 20);

            bool listOneEmpty = listOne.Any();
            bool listTwoEmpty = listTwo.Any();

            Console.WriteLine("List one has members?" + listOneEmpty + 
                "\nList two has members? " + listTwoEmpty);
            Console.WriteLine("ListTwo has 12? " + listTwo.Contains(12) +
                "\nListOne has 30? " + listOne.Contains(30));

            var bigList = Enumerable.Range(1, 20);
            var littleList = bigList.Take(5).Select(x => x * 10);
            foreach (var item in littleList)
            {
                Console.WriteLine(item);
            }

            //Zip

            string[] postalCodes = { "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL" };
            string[] states = {"Alabama", "Alaska", "Arizona",
                                "Arkansas", "California", "Colorodo", "connecticut", "Deleware", "Florida"};
            var statesWithCodes = postalCodes.Zip(states, (code, state) =>
            code + ":"+ state);
            foreach (var item in statesWithCodes)
            {
                Console.WriteLine(item);
            }

            int[] scores = new int[] { 1, 2, 3, 4, 5, 6, 7 };
            IEnumerable<int> scoreQuery =
                from score in scores
                where score > 3
                select score;
            foreach(int i in scoreQuery)
            {
                Console.Write(i + " ");
            }

            IEnumerable<int> highScoresQuery =
                from score in scores
                where score >3 
                orderby score descending
                select score;
            Console.WriteLine("\n\n");
            foreach (var item in highScoresQuery)
            {
                
                Console.Write(item + " ");
            }
            int highScoreCount =
                (from score in scores
                where score > 3
                select score)
                .Count();
            Console.WriteLine("\n\n");
            Console.Write(highScoreCount);

          
            
        }
    }
}
