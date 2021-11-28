class Bag {
    constructor(weight) {
        this.weight = weight;
        if (!this.weight)
            throw new Error('bag must have a weight');
    }
    isOverLimit() {
        return (this.weight > 21);
    }
}

module.exports = Bag;