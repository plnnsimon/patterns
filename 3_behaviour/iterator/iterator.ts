interface MainIterator<T> {
    current(): string
    hasNext(): boolean
    next(): T 
}

class MyIterator implements MainIterator<string> {
    private collection: WordsCollection
    private index: number
    constructor(collection: WordsCollection) {
        this.collection = collection;
        this.index = 0
    }

    current(): string {
        console.log(`Current: ${this.index}`);
        return this.collection.getItems()[this.index]
    }

    hasNext(): boolean {
        return this.index < this.collection.getCount()
    }

    next(): string {
        if (this.hasNext()) {
            this.current()
            return this.collection.getItems()[this.index++]
        } else {
            console.log("End of collection");
            return this.collection.getItems()[this.index]
        }
    }
}

interface Aggregator {
    getIterator(): MainIterator<string>
}

class WordsCollection implements Aggregator {
    private collection: string[] = []
    public getItems(): string[] {
        return this.collection
    }
    public getCount(): number {
        return this.collection.length
    }
    public addItem(item: string): void {
        this.collection.push(item)
    }
    public getIterator(): MainIterator<string> {
        return new MyIterator(this)
    }
}
const wordsList = new WordsCollection()
wordsList.addItem('a')
wordsList.addItem('b')
wordsList.addItem('c')
wordsList.addItem('d')

const iterator = wordsList.getIterator()

// const iterator = new MyIterator(collection);

console.log(iterator.hasNext())

iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
