class Royal {
    constructor(name, parents) {
        this.name = name;
        this.parents = parents;
    }
    childOf = () => this.parents[0] + " " + this.parents[1];
};

const firstGen = [ 
    new Royal("Queen Elizabeth II", ["King George VI", "Queen Elizabeth"]),
    new Royal("Princess Margarett", ["King George VI", "Queen Elizabeth"]),
];

const secondGen = [ 
    new Royal("Charles", ["Prince Philip", "Queen Elizabeth II"]),
    new Royal("Anne", ["Prince Philip", "Queen Elizabeth II"]),
    new Royal("Prince Andrew", ["Prince Philip", "Queen Elizabeth II"]),
    new Royal("Prince Edward", ["Prince Philip", "Queen Elizabeth II"])
];

const thirdGen = [ 
    new Royal("Prince William", ["Charles", "Diana"]),
    new Royal("Prince Harry", ["Charles", "Diana"]),
];

console.log(firstGen[0]);

//thirdGen.forEach(royalPerson => console.log(royalPerson.childOf()));

module.exports = Royal;

