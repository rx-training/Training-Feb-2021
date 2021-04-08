const { on } = require("node:events")

class Mobike{
    constructor(Days){
        this.Days=Days
    }
    
        compute(){
            var charge=0, chLessThenFive=500,ChBetSixTen=400,ChGreaterthenTen=200
            var i;
            for(i=0;i<=this.Days;i++){
            if(i<6){
                charge=i*chLessThenFive
            }
            if(i>5 && this.Days<11){
                charge=charge+(i-(i-1))*ChBetSixTen
            }
            if(i>10){
                charge =charge+(i-(i-1))*ChGreaterthenTen
            } 
            return charge
        }
    }
}
var Bike_no,Phone_no,Name,Days
var arg = process.argv.forEach((val,index) =>{
    console.log(`$(index):$(val)`)
    if(index==2){
        Bike_no=parseInt(val);
    }
    else if(index==3){
        Phone_no=parseInt(val);
    }
    else if(index==4){
        Name =val;
    }
    else if(index==5){
        Days=parseInt(val);
    }
});

var charge = new Mobike(Days)
var computecharge=charge.compute()
module.exports = {Bike_no,Phone_no,Days,computecharge}