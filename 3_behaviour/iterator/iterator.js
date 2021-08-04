var MyIterator = /** @class */ (function () {
    function MyIterator(collection) {
        this.collection = collection;
        this.index = 0;
    }
    MyIterator.prototype.current = function () {
        console.log("Current: " + this.index);
        return this.collection.getItems()[this.index];
    };
    MyIterator.prototype.hasNext = function () {
        return this.index < this.collection.getCount();
    };
    MyIterator.prototype.next = function () {
        if (this.hasNext()) {
            this.current();
            return this.collection.getItems()[this.index++];
        }
        else {
            console.log("End of collection");
            return this.collection.getItems()[this.index];
        }
    };
    return MyIterator;
}());
var WordsCollection = /** @class */ (function () {
    function WordsCollection() {
        this.collection = [];
    }
    WordsCollection.prototype.getItems = function () {
        return this.collection;
    };
    WordsCollection.prototype.getCount = function () {
        return this.collection.length;
    };
    WordsCollection.prototype.addItem = function (item) {
        this.collection.push(item);
    };
    WordsCollection.prototype.getIterator = function () {
        return new MyIterator(this);
    };
    return WordsCollection;
}());
var wordsList = new WordsCollection();
wordsList.addItem('a');
wordsList.addItem('b');
wordsList.addItem('c');
wordsList.addItem('d');
var iterator = wordsList.getIterator();
// const iterator = new MyIterator(collection);
console.log(iterator.hasNext());
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
//# sourceMappingURL=iterator.js.map