
var args = process.argv.slice(2);
class Mobike {
    constructor(BikeNo, PhoneNo, Name, Days) {
        this.BikeNo = BikeNo;
        this.PhoneNo = PhoneNo;
        this.Name = Name;
        this.Days = Days;
    }

    compute(days) {

        var money1=500;
        var money2=400;
        var money3=200
        if (days <= 5) {
            const rent = money1 * days;
            return rent;
        }

        if (days <= 10) {
            let dayGreater5 = days - 5;
            let dayless5 = 5;
            let rent = (dayless5 * money1) + (dayGreater5 * money2);
            return rent;
        }

        if (days > 10) {
            let dayGreater5 = 5;
            let dayless5 = 5;
            let dayGreater10 = days - 10;
            let rent = (dayless5 * money1) + (dayGreater5 * money2) + (dayGreater10 * money3);
            return rent;

        }
    }
}

var obj1 = new Mobike(args[0], args[1], args[2], args[3]);

var rent = obj1.compute(obj1.Days);
console.log(`The Rent Of the BikeNo : ${obj1.BikeNo} For ${obj1.Days} days is ${rent}`);






