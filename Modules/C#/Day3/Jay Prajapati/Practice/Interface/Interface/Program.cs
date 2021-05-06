using System;
using System.Collections.Generic;

namespace Interface
{
    class Program
    {
        static void Main(string[] args)
        {
            var storableObjects = new List<IStorable>();
            Note myNote = new Note();
            storableObjects.Add(myNote);
            DBEntry myDBEntry = new DBEntry();
            storableObjects.Add(myDBEntry);
            myDBEntry = new DBEntry();
            storableObjects.Add(myDBEntry);
            myNote = new Note();
            storableObjects.Add(myNote);
            myNote = new Note();
            storableObjects.Add(myNote);
            foreach (IStorable storable in storableObjects)
            {
                storable.Write(null);
                Console.WriteLine(storable.Read());
            }

        }
    }
}
