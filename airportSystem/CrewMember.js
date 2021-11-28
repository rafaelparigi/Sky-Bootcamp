const Person = require('./Person');

class CrewMember extends Person {
    constructor(name, bags, position, staffNumber) {
        super(name, bags);
        this.position = position; 
        this.staffNumber = staffNumber;
        if (this.position === undefined)
            throw new Error('Crew member must have a position')
        if (this.staffNumber === undefined)
            throw new Error('Crew member must have a staff number')        
    }
}

module.exports = CrewMember;