class Dir {
    getInfo() {
        return console.log(`Directory - ${this.dir}`);
    }
}

class Field extends Dir {
    constructor(fieldName) {
        super()
        this.fieldName = fieldName;
    }

    getInfo() {
        return console.log(`Directory - ${this.dir}`);
    }
}

class FieldComposite extends Dir {
    constructor(fieldName) {
        super()
        this.dir = []
        if (fieldName) {
            this.dir.push(new Field(fieldName))
        }
    }

    addField(fieldName) {
        this.dir.push(fieldName)
    }

    removeField(fieldName) {
        this.dir.splice(this.dir.indexOf(fieldName), 1)
    }

    getInfo() {
        return console.log(`Directory - ${JSON.stringify(this.dir)}`)
    }
}

const field = new FieldComposite()

const firstField = new Field("firstField")
const secondField = new Field("secondField")

field.addField(firstField)
field.addField(secondField)

field.getInfo()