const Person = require('./Person');

class Passenger extends Person {
    constructor(name, bags, passportNumber, seatNumber) {
        super(name, bags);
        if (!passportNumber)
            throw new Error('passenger must have a passport number');
        if (!seatNumber)
            throw new Error('passenger must have a seat number'); 
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
    }
}

module.exports = Passenger;