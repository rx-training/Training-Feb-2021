class mobike
{   
    constructor(Days){
        this.Days = Days
    }
    compute(){
        var charge = 0;
        var i;
        for(i=1 ; i<= this.Days ;i++){
            if(i<6) {
                charge =  i * 500;
            }
            if (i>5 & i<11) {
                charge = charge + (i -(i - 1))* 400
            }
            if (i>10) {
                charge = charge + (i -(i - 1))* 200
            }
        }
        return charge;
    }
  }

var Bikeno,Phoneno,Name,Days;
var arg  = process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
    if(index==2){
        Bikeno = parseInt(val);}
    else if(index==3){
        Phoneno = parseInt(val);}
    else if(index==4)
        Name = val;
    else if(index==5)
        Days = parseInt(val);
  })

var charges  = new mobike(Days);
var charges1 = charges.compute()
console.log(charges1)
module.exports = {Bikeno,Phoneno,Days,charges1}