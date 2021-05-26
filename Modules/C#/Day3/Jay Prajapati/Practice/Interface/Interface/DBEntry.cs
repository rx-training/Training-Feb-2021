using System;
using System.Collections.Generic;
using System.Text;

namespace Interface
{
    public class DBEntry : IStorable
    {
        private ReturnStatus St;
        public ReturnStatus Status
        {
            get
            {
                return St;
            }
            set
            {
                St = value;
            }
        }

        public string Read()
        {
            return "Writing Object in Database..";
        }

        public void Write(object obj)
        {
            Console.WriteLine("Reading note from Database...");
        }
    }
}
