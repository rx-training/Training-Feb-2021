using System;
using System.Collections.Generic;
using System.Text;

namespace Interface
{
    public class Note : IStorable
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
            return "Writing Object in Disc..";
        }

        public void Write(object obj)
        {
            Console.WriteLine("Reading note from disc");
        }

    }
}
