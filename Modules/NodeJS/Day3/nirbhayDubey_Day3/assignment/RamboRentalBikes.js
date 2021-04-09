class Mobike{

    constructor(name,bikeNumber,phoneNumber,days){
        this.name=name;
        this.bikeNumber=bikeNumber;
        this.phoneNumber=phoneNumber;
        this.days=days
    }

    compute(){
        let rentalCharge=0;
        let tmpd=this.days;
        if(tmpd>5){
            if(tmpd>10){
                rentalCharge=(5*500)+(5*400);
                tmpd-=10;
                rentalCharge+=(tmpd*200);
            }else{
                rentalCharge=(5*500);
                tmpd-=5;
                rentalCharge+=(tmpd*400);
            }
        }else{
            rentalCharge=tmpd*500;
        }
        return rentalCharge;
    }
}

const cust1=new Mobike('Nirbhay','GJ1AB100','8754658582',15);
const cust2=new Mobike('Hetarth','GJ1CD101','5685878745',5);
const cust3=new Mobike('Anujpal','GJ1EF102','9656858545',18);


exports.cust=[cust1,cust2,cust3];