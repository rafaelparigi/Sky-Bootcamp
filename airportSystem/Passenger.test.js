const Passenger = require('./Passenger');
const Bag = require('./Bag');


describe('Passenger', () => {
    test('without passport number throws error', () => {
        expect(() => new Passenger('name', [], undefined, 'random')).toThrowError('passenger must have a passport number');
    });
    test('without seat number being a number throws an error', () => {
        expect(() => new Passenger('random', [], 'random', undefined)).toThrowError('passenger must have a seat number');
    });
    test('does not throw error if given valid arguments', () => {
        expect(() => new Passenger('name', ['anybag'], 'passNo', '10a')).not.toThrowError();
    })
});