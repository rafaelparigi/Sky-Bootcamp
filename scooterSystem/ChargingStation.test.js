const { ChargingStation } = require('./ChargingStation');
const { Scooter } = require('./Scooter');

describe('ChargingStation', () => {
    test('if chargeScooter makes a scooter available after a certain amount of time', async () => {
        const myScooter = new Scooter(false, false);
        const chargingStation1 = new ChargingStation('Leeds');
        expect(myScooter.isAvailable).toBe(false);
        await chargingStation1.chargeScooter(myScooter);
        expect(myScooter.isAvailable).toBe(true);
    });
    test('if chargeScooter takes the scooter back to fully charged', () => {
        jest.useFakeTimers();
        const myScooter = new Scooter(false, false);
        const chargingStation1 = new ChargingStation('Leeds');
        expect(myScooter.chargingLevel).toBe(1);
        myScooter.adjustChargingLevel(24);
        expect(myScooter.chargingLevel).toBe(0.25);
        chargingStation1.chargeScooter(myScooter);
        jest.runAllTimers();
        expect(myScooter.chargingLevel).toBe(1);
        jest.useRealTimers();
    });
});