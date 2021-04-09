/* Rambo Rental Bikes is looking for developing a system to calculate the rentals of the bikes. 
   System should accept the customer details, bike details and calculate the rental charges.

=> DESCRIPTION OF PROJECTS
   System allows users to add customer details with bike rented. It computes rent for each customer. 
   Systems displays the Bike details with summation of days of hire and rental payment.   
   
=> FUNCTIONALITY AND TASK
   Define a class called Mobike with the following description: 
        Instance variables/data members: 
            BikeNumber – to store the bike’s number
            PhoneNumber – to store the phone number of the customer
            Name – to store the name of the customer
            Days – to store the number of days the bike is taken on rent 
            charge – to calculate and store the rental charge

        Member methods:
            void Compute( ) – to compute the rental charge

            Bike No.         PhoneNo             No. of days         Charge

=>  The rent for a mobike is charged on the following basis:
        First five days Rs 500 per day
        Next five days Rs 400 per day
        Rest of the days Rs 200 per day

Note use get this Data @param ES6 class  Exports BikeNo,Phone,Noofdays and Charge.      */



const info = require('fs')

const args = process.argv.slice(2)
console.log(args) 

var name = args[0]
var Mno = parseInt( args[1])
var Bno = parseInt( args[2])
var days = parseInt( args[3])
var charge = 0;

/* console.log(name)
console.log(Mno)
console.log(Bno)
console.log(days) */


class mobike
{
    constructor(d){
        this.d = d
    }
    compute()
    {
        if(this.d < 6)
        {
            charge = this.d * 500
        }
        else if(this.d < 11)
        {
            for(var i= 1 ; i<= this.d ; i++)
            {
                if(i < 6)
                {
                    charge = charge + 500
                }
                if(i >= 6)
                {
                    charge = charge + 400
                }
            }
        }
        else{
            for(var i= 1 ; i<= this.d ; i++)
            {
                if(i < 6)
                {
                    charge = charge + 500
                }
                if(i >= 6 && i < 11)
                {
                    charge = charge + 400
                }
                if(i > 10)
                {
                    charge = charge + 200
                }
            }
        }
        return charge
    }
}

var m1 = new mobike(days);
var total = m1.compute()
//console.log(total)

console.log("Rent for bike no " + Bno + " is = " + total + " ( customer name = " + name + " : phone no = "+Mno +" )")