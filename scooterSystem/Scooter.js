class Scooter {
    //list of scooters initialised. Static, so can be accessed directly through the class
    static scooterList = []; 

    constructor(isAvailable, isBroken) {
        this.isAvailable = isAvailable;
        this.isBroken = isBroken;
        //chargingLevel will be 1 when fully charged, and 0 when no charge. 
        this.chargingLevel = 1;
        //pushes the instance of the scooter created into the static scooterList array
        Scooter.scooterList.push(this);
    };
    setIsAvailable(isScooterAvailable) {
        this.isAvailable = isScooterAvailable;
    };
    adjustChargingLevel(distance) {
    //The maximum range of a fully charged scooter is 32 km,
    //so we'll keep chargingLevel 0 ~ 1
        this.chargingLevel -= distance/32;
    };
};

module.exports = { Scooter };

