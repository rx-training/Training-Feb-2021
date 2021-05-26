using System;
using System.Collections.Generic;
using System.Text;

namespace DictionaryDemo
{
    class State
    {
        public string Capital { get; set; }
        public int Population { get; set; }
        public int Size { get; set; }
        public State(string capital, int pop, int size)
        {
            Capital = capital;
            Population = pop;
            Size = size;
        }
        public static Dictionary<string, State> GetStates()
        {
            var states = new Dictionary<string, State>();
            var theState = new State("Gandhinagar", 12123, 122333);
            states.Add("Gujarat", theState);
            theState = new State("Mumbai", 10534333, 876543543);
            states.Add("Maharastra", theState);
            return states;


        }
    }
}
