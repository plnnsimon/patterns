let collection = [1, 'str', false, 1.1]

class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0
    }

    hasNext() {
        return this.index < this.collection.length
    }

    next() {
        return this.collection[this.index++]
    }
}

const iterator = new Iterator(collection);

console.log(iterator.hasNext())

console.log(iterator.next());
console.log(iterator.next());