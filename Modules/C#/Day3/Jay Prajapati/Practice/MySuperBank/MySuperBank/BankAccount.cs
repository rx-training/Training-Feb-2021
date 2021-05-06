using System;
using System.Collections.Generic;
using System.Text;

namespace MySuperBank
{
    public class BankAccount
    {
        //public BankAccount(string name, decimal initialBalance)
        //{
        //    this.Number = accountNumberSeed.ToString();
        //    accountNumberSeed++;
        //    this.Owner = name;
        //    MakeDeposit(initialBalance, DateTime.Now, "Initial Balance");
        //}
        private readonly decimal minimumBalance;

        public BankAccount(string name, decimal initialBalance) : this(name, initialBalance, 0) { }

        public BankAccount(string name, decimal initialBalance, decimal minimumBalance)
        {
            this.Number = accountNumberSeed.ToString();
            accountNumberSeed++;

            this.Owner = name;
            this.minimumBalance = minimumBalance;
            if (initialBalance > 0)
                MakeDeposit(initialBalance, DateTime.Now, "Initial balance");
        }
        public string Number { get; }
        public string Owner { get; set; }
        public decimal Balance { 
            get
            {
                decimal balance = 0;
                foreach (var item in AllTransactions)
                {
                    balance += item.Amount;
                }
                return balance;
            }
        }
        private static int accountNumberSeed = 1234567890;
        List<Transaction> AllTransactions = new List<Transaction>();
        

        public BankAccount(string name)
        {
            this.Owner = name;
           // this.Balance = initialBalance;
            this.Number = accountNumberSeed.ToString();
            accountNumberSeed++;

        }
        public string getAccountHistory()
        {
            var report = new System.Text.StringBuilder();
            decimal balance = 0;
            report.AppendLine("Dat\t\tAmount\tBalance\tNote");
            foreach (var item in AllTransactions)
            {
                balance += item.Amount;
                report.AppendLine($"{item.Date.ToShortDateString()}\t{item.Amount}\t{balance}\t{item.Notes}");

            }
            return report.ToString();
        }

        

        public void MakeDeposit(decimal amount, DateTime date, string note)
        {
            if(amount <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(amount), "Amount of deposit must be positive");
            }
            var deposit = new Transaction(amount, date, note);
            AllTransactions.Add(deposit);
        }
        public void MakeWithdrawal(decimal amount, DateTime date, string note)
        {
            if (amount <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(amount), "Amount of withdrawal must be positive");
            }
            if (Balance - amount < minimumBalance)
            {
                throw new ArgumentOutOfRangeException(nameof(amount), "Not sufficient funds for this withdrawal");
            }
            var withdrawal = new Transaction(-amount, date, note);
            AllTransactions.Add(withdrawal);

        }
            public virtual void PerformMonthEndTransactions() { }
    }
}
