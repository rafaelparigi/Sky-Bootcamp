const Person = require('./Person');
const Bag = require('./Bag');

describe('Person', () => {
    test('name is', () => {
        expect(() => new Person(undefined, 'random')).toThrowError('name must be a string');
    });
    test('addBag method', () => {
        const myPerson = new Person('Rafa', []);
        expect(myPerson.bags.length).toBe(0);
        myPerson.addBag(new Bag(10));
        expect(myPerson.bags.length).toBe(1);
    });
    test('addBag throws error for non-bags', () => {
        const myPerson1 = new Person('StringA', []);
        expect(() => myPerson1.addBag('notabag')).toThrowError('must be a bag');
    });
    test('creating a Person with a bag array', () => {
        expect(() => new Person('rafa', ['I am inside an array'])).not.toThrowError();
        expect(() => new Person('rafa', 'I am not inside an array')).toThrowError("must be an array of bags");
    })
});