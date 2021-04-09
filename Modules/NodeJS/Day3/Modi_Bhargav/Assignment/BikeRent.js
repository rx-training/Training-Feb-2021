class MoBike{
  constructor(BikeNo , PhoneNo ,Name , NoofDays )
  {
    this.BikeNo = BikeNo;
    this.PhoneNo = PhoneNo;
    this.Name = Name;
    this.NoofDays = NoofDays;
  }

  compute() {
     const number = this.NoofDays;
     const rentFive = 500;
     const rentNextFive = 400;
     const rentTenPlus = 200;
     let charge;

    if(number <= 5){
      charge = number * rentFive
    }
    else if(number <= 10){
      charge = (5 * rentFive) + (number-5) * rentNextFive
    }
    else if(10 < number){
      charge = (5 * rentFive) + (5 * rentNextFive) + (number - 10) * rentTenPlus
    }
    return charge
  }
}

module.exports = MoBike