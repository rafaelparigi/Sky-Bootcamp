const { App } = require('./App');

class Server {
    constructor() {
        this;
    }
    handleDownloadRequest() {
        return new App();
    };
    handleBrokenScooter(scooter) {
        console.log('Apologies for the inconvenience');
        scooter.isBroken = true;
        scooter.isAvailable = false;
    };
    handlePayment(user) {
        if (user === null)
            throw new Error('user not registered');
        if (user.bankDetails === 'invalid')
            throw new Error('invalid bank details');
        else {
            user.successfulPayment = true; 
            console.log(`Payment processed for account: ${user.bankDetails}`);
        };
    };
};

module.exports = { Server };