const { Scooter } = require("./Scooter");
const { Server } = require("./Server");

class User {
    constructor(age, bankDetails) {
        this.age = age;
        this.bankDetails = bankDetails;
        this.userApp = null;
        this.successfulPayment = null;
    };
    downloadApp(server) {
        //initialises userApp to a new instance of the App class, i.e the return of Server.handleDownloadRequest()
        this.userApp = server.handleDownloadRequest();
    };
    registerDetailsInApp() {
        //passes this user as an argument to the registerUser method of our instance of the App class (userApp)
        this.userApp.registerUser(this);
    };
};

module.exports = { User };