class mobike
{   
    constructor(Days){
        this.Days = Days
    }
    compute(){
        var charge
        if(this.Days<6) {
            charge = this.Days * 500;
        }
        else if (this.Days>5 & this.Days<11) {
            charge = this.Days * 400
        }
        else if (this.Days>10) {
            charge = this.Days * 200
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
module.exports = {Bikeno,Phoneno,Days,charges1}