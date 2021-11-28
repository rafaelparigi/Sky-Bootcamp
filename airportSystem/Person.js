class Person {
    constructor(name, bags) {
        if (typeof name !== 'string') 
            throw new Error('name must be a string');
        else
            this.name = name;
        if (!Array.isArray(bags))
            throw new Error("must be an array of bags");
        else
            this.bags = bags;
    };
    addBag(bag) {
        if (typeof bag === 'object' && bag.constructor.name === 'Bag')
            this.bags.push(bag);
        else
            throw new Error('must be a bag');
    }
};

module.exports = Person;
