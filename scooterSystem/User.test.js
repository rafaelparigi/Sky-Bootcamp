const { User } = require('./User');
const { Server } = require('./Server');

describe('User class: ', () => {
    test('user has no app until they run downloadApp', () => {
        const newUser = new User(20, '1234');
        const server = new Server();
        expect(newUser.userApp).toBe(null);
        newUser.downloadApp(server);
        expect(newUser.userApp).not.toBe(null);
        expect(newUser.userApp.constructor.name).toBe('App');
    });
    test('user can register details in the app', () => {
        const server = new Server();
        const newUser = new User(20, '1234');
        newUser.downloadApp(server);
        expect(newUser.userApp.appUser).toBe(null);
        newUser.registerDetailsInApp();
        expect(newUser.userApp.appUser).toBe(newUser);
    });
});