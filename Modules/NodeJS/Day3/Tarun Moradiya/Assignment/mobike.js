const MoBike = class {
    constructor (bikeNumber, phoneNumber, name, days) {
        this.bikeNumber = bikeNumber
        this.phoneNumber = phoneNumber
        this.name = name
        this.days = days
        this.charge = this.compute()
    }

    compute() {
        let num = +this.days
        let rent 

        if (num <= 5) {
            rent = num * 500
        } else if (num <= 10) {
            rent = (500 * 5) + (num - 5) * 400
        } else {
            rent = (500 * 5) + (400 * 5) + (num - 10) * 200
        }

        return rent
    }
}

module.exports = MoBike