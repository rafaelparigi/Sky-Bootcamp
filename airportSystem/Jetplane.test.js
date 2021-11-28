const Jetplane = require('./Jetplane');

describe('Jetplane', () => {
    test('needs a name', () => {
        expect(() => new Jetplane()).toThrowError("must have a name");
    });
    test('needs age', () => {
        expect(() => new Jetplane('angus')).toThrowError('must have age');
    })
});