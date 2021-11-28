const Plane = require ('./Plane');
const Passenger = require ('./Passenger');
const Airport =  require('./Airport');

describe('Plane', () => {
    test('type is', () => {
        expect(() => new Plane(undefined, new Airport('NYC'))).toThrowError('Plane must have a type');
    });
    test('board plane', () => {
        const newPassenger = new Passenger('rafa', '12345', '25a');
        const newPlane = new Plane('boeing', new Airport('NYC'));
        expect(newPlane.passengers.length).toBe(0);
        newPlane.board(newPassenger);
        expect(newPlane.passengers.length).toBe(1);
    });
    test('fly method', () => {
        const paris = new Airport('PRS');
        iberia123 = new Plane('boeing', paris);
        const london = new Airport('LHX');
        iberia123.setDestination(london);
        expect(iberia123.originAirport.name).toBe('PRS');
        expect(iberia123.destination.name).toBe('LHX');
        iberia123.fly();
        expect(iberia123.originAirport.name).toBe('LHX');
        expect(iberia123.destination).toBe(null);
    });
    test('is originAirport an object', () => {
        const paris = new Airport('PRS');
        const ba111 = new Plane('airbus', paris);
        expect(typeof ba111.originAirport).toBe('object');
    });
});