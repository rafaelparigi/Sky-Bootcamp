const Airport =  require('./Airport');

class Plane {
    constructor(type, originAirport) {
        this.type = type;
        this.passengers = [];
        this.destination = null;
        if (typeof originAirport !== 'object')
            throw new Error('airport must be an object');
        else 
            this.originAirport = originAirport;
        
        if (!this.type)
            throw new Error('Plane must have a type');
    };
    
    board(passenger) {
        this.passengers.push(passenger);
    };

    setDestination(airport) {
        if (this.destination !== this.originAirport)
            this.destination = airport;
    };

    fly() {
        this.originAirport = this.destination;
        this.destination = null;
    };
};

module.exports = Plane;