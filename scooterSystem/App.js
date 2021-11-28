class App {
    constructor() {
        //initialises to null as user is not yet registered
        this.appUser = null;
    };
    registerUser(user) {
        //registers user, i.e. gives the downloaded app a user, as long as they are older than 18.
        if(user.age < 18)
            throw new Error('user must be over 18');
        else
            this.appUser = user;
    };
    rentScooter(scooter) {
        //in case user has downloaded app but is not registered, i.e. app doesn't have a user
        if (this.appUser === null)
            throw new Error('user is not registered');
        if (!scooter.isAvailable)
            throw new Error('scooter is not available');
        else if (scooter.isBroken)
            throw new Error('scooter is broken');
        else {
            console.log("This scooter can be riden for 32km. Enjoy.") 
            scooter.setIsAvailable(false);
        };
    };
re

    //user reports broken scooter on the app, but it's handled by the server.
    reportBrokenScooter(scooter, server) {
        server.handleBrokenScooter(scooter);
    };
    //user chooses to pay on the app, but payment is handled by the server.
    takePayment(server) {
        server.handlePayment(this.appUser);
    };
};

module.exports = { App };
