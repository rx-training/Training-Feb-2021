using System;

namespace MySuperBank
{
    class Program
    {
        static void Main(string[] args)
        {
            BankAccount myAccount = new BankAccount("Jay", 100);
            BankAccount myAccount1 = new BankAccount("Adam", 10000);
            

            Console.WriteLine($"Account Number {myAccount.Number}, Owner Name {myAccount.Owner} and Balance is {myAccount.Balance}");
            Console.WriteLine($"Account Number {myAccount1.Number}, Owner Name {myAccount1.Owner} and Balance is {myAccount1.Balance}");
            myAccount.MakeDeposit(1000, DateTime.Now, "Friend paid me back");
            Console.WriteLine(myAccount.Balance);
            myAccount.MakeWithdrawal(500, DateTime.Now, "Rent payment");
            Console.WriteLine(myAccount.Balance);
            Console.WriteLine(myAccount.getAccountHistory());



            var giftCard = new GiftCardAccount("gift card", 100, 50);
            giftCard.MakeWithdrawal(20, DateTime.Now, "get expensive coffee");
            giftCard.MakeWithdrawal(50, DateTime.Now, "buy groceries");
            giftCard.PerformMonthEndTransactions();
            // can make additional deposits:
            giftCard.MakeDeposit(27.50m, DateTime.Now, "add some additional spending money");
            Console.WriteLine(giftCard.getAccountHistory());

            var savings = new InterestEarningAccount("savings account", 10000);
            savings.MakeDeposit(750, DateTime.Now, "save some money");
            savings.MakeDeposit(1250, DateTime.Now, "Add more savings");
            savings.MakeWithdrawal(250, DateTime.Now, "Needed to pay monthly bills");
            savings.PerformMonthEndTransactions();
            Console.WriteLine(savings.getAccountHistory());



            var lineOfCredit = new LineOfCreditAccount("line of credit", 10000);
            // How much is too much to borrow?
            lineOfCredit.MakeWithdrawal(1000m, DateTime.Now, "Take out monthly advance");
            lineOfCredit.MakeDeposit(50m, DateTime.Now, "Pay back small amount");
            lineOfCredit.MakeWithdrawal(5000m, DateTime.Now, "Emergency funds for repairs");
            lineOfCredit.MakeDeposit(150m, DateTime.Now, "Partial restoration on repairs");
            lineOfCredit.PerformMonthEndTransactions();
            Console.WriteLine(lineOfCredit.getAccountHistory());
        }
    }
}

