const { beforeAll } = require('@jest/globals');
const Royal = require ('./royal-family');


describe('first generation', () => {
    const person1 = new Royal("Queen Elizabeth II", ["King George VI", "Queen Elizabeth"])
    test('person1 parents are:', () => {
        expect(person1.childOf()).toBe("King George VI Queen Elizabeth")
    })

    test('person1 is:', () => {
        expect(person1.name).toBe("Queen Elizabeth II")
    })
});


describe('first generation', () => {
    beforeAll(() => { //we don't use const or let here because it would have only local scope and couldn't be used for testing
        elizabethII = new Royal("Queen Elizabeth II", ["King George VI", "Queen Elizabeth"]);
        margarett = new Royal("Princess Margarett", ["King George VI", "Queen Elizabeth"]);
        charles = new Royal("Charles", ["Prince Philip", "Queen Elizabeth II"]);
        anne = new Royal("Anne", ["Prince Philip", "Queen Elizabeth II"]);
        andrew = new Royal("Prince Andrew", ["Prince Philip", "Queen Elizabeth II"]);
        edward = new Royal("Prince Edward", ["Prince Philip", "Queen Elizabeth II"]);
        william = new Royal("Prince William", ["Charles", "Diana"]);
        harry = new Royal("Prince Harry", ["Charles", "Diana"]);
    });
    
    test('Elizabeth II parents are:', () => {
        expect(william.childOf()).toBe("Charles Diana");
    });

    test('childOf should return a string:', () => {
        expect(typeof elizabethII.childOf()).toBe("string");
    });
});