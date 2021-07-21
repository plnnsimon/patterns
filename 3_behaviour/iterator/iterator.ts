let collection: Array<any> = [1, 'str', false, 1.1]

class MyIterator {
    private index: number
    constructor(public collection: Array<any>) {
        this.collection = collection;
        this.index = 0
    }

    hasNext(): boolean {
        return this.index < this.collection.length
    }

    next(): any {
        return this.collection[this.index++]
    }
}

const iterator = new MyIterator(collection);

console.log(iterator.hasNext())

console.log(iterator.next());
console.log(iterator.next());
