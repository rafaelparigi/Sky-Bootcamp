class Jetplane {
    constructor(name, age) {
        this.name = name;
        if (name === undefined)
            throw new Error('must have a name');
        if (age === undefined)
            throw new Error('must have age');
    };
};

module.exports = Jetplane;
