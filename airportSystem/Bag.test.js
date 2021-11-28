const Bag = require ('./Bag');


describe('Bag', () => {
    test('weight is', () => {
        expect(() => new Bag()).toThrowError("bag must have a weight");
    });
    test('is overweight', () => {
        const myBag = new Bag(25);
        expect(myBag.isOverLimit()).toBe(true);
    });
    test('is not overweight', () => {
        const myBag = new Bag(20);
        expect(myBag.isOverLimit()).toBe(false);
    });
});

