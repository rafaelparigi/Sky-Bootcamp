const { Scooter } = require('./Scooter');

describe('Scooter', () => {
    test('if setIsAvailable sets a scooter as available', () => {
        const myScooter = new Scooter(false, false);
        expect(myScooter.isAvailable).toBe(false);
        myScooter.setIsAvailable(true);
        expect(myScooter.isAvailable).toBe(true);         
    });
    test('if scooter charging level is adjusted once we execute adjustChargingLevel', () => {
        const myScooter = new Scooter(true, false);
        expect(myScooter.chargingLevel).toBe(1);
        myScooter.adjustChargingLevel(16);
        expect(myScooter.chargingLevel).toBe(0.5);
        myScooter.adjustChargingLevel(8);
        expect(myScooter.chargingLevel).toBe(0.25);     
    });
});