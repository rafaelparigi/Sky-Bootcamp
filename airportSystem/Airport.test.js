const Airport = require ('./Airport');


describe('Airport', () => {
    test('name is', () => {
        expect(() => new Airport()).toThrowError('airport must have a name');
    })
    test('list of airports:', () => {
        const london = new Airport('LHX');
        const paris = new Airport('PRS');
        expect(Airport.airports.length).toBe(2);
    })
});