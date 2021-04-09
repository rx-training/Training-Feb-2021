const data=require('./RamboRentalBikes');

const cust1=data.cust;
console.log(`Name. \t\t BikeNo. \t PhoneNo \t No.ofDays \t Charge`);
cust1.forEach(element => {
    console.log(`${element.name} \t ${element.bikeNumber} \t ${element.phoneNumber} \t ${element.days} \t\t ${element.compute()}`);
});
