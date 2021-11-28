const { Scooter } = require('./Scooter');

class ChargingStation {

    MILLISECONDS_IN_TWO_HOURS = 7_200_000;

    async chargeScooter(scooter) {
        console.log('Starting charge');
        //set scooter to available and charged after a certain amount of time 0 ~ 2hours
        /*If you make a function async then, when you run that function in the code, it does not block the code below it. 
        Inside the function, the await keyword tells your code to wait for a value. 
        The reason you need this is because sometimes code doesn't automatically give you the result you need, so you need to await the result via a Promise.*/
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                scooter.chargingLevel = 1;
                console.log('Charge complete');
                scooter.setIsAvailable(true);
                resolve();
            }, this.MILLISECONDS_IN_TWO_HOURS * (1 - this.chargingLevel));
        });
    };
};

module.exports = { ChargingStation };
