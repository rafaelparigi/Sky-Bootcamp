const { Scooter } = require('./Scooter');
const { Server } = require('./Server');
const { User } = require('./User');

describe('Server', () => {
    test('handleDownloadRequest returns an App', () => {
        const server = new Server();
        const newApp = server.handleDownloadRequest();
        expect(newApp.constructor.name).toBe('App');
    });
    test('handleBrokenScooter turns scooter status to broken and not available', () => {
        const server = new Server();
        const scooter = new Scooter(true, false);
        server.handleBrokenScooter(scooter);
        expect(scooter.isBroken).toBe(true);
        expect(scooter.isAvailable).toBe(false);
    });
    test('handlePayment throws error if bank details are invalid', () => {
        const server = new Server();
        const myUser = new User(25, 'valid');
        myUser.downloadApp(server);
        myUser.registerDetailsInApp();
        expect(() => server.handlePayment(myUser)).not.toThrowError();
        const myUser1 = new User(25, 'invalid');
        myUser1.downloadApp(server);
        myUser1.registerDetailsInApp();
        expect(() => server.handlePayment(myUser1)).toThrowError('invalid bank details'); 
    });
    test('handlePayment sets user.successfulPayment to true', () => {
        const server = new Server();
        const myUser = new User(25, 'valid');
        expect(myUser.successfulPayment).toBe(null);
        myUser.downloadApp(server);
        myUser.registerDetailsInApp();
        server.handlePayment(myUser);
        expect(myUser.successfulPayment).toBe(true);
    });
});