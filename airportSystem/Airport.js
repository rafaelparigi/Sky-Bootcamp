class Airport {
    static airports = [];

    constructor(name) {
        this.name = name
        if (name === undefined)
            throw new Error('airport must have a name');
        Airport.airports.push(this);
    }
};

module.exports = Airport;