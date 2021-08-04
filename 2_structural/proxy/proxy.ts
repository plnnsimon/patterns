interface User {
    accessToChange: boolean
    getContent(): void
    changeContent(): void
}


class AbstractUser implements User {
    accessToChange: boolean
    type: string

    constructor(type: string) {
        this.type = type
        this.accessToChange = false
    }

    public getContent(): void {
        console.log('some content')
    }
    public changeContent(): void {
        console.log('Some operations with content...');
    }
}



class ContentSecurity implements User {
    accessToChange: boolean
    private user: AbstractUser
    constructor(user: AbstractUser) {
        this.user = user
        this.accessToChange = false
    }

    changeContent(): void {
        if (this.checkAccess()) {
            this.accessToChange = true
        } else {
            this.accessToChange = false
        }
    }

    public getContent(): void {
        if (this.checkAccess()) {
            this.user.getContent()
            this.user.changeContent()
        } else {
            this.user.getContent()
        }
    }

    private checkAccess(): boolean {
        console.log("Checking user...")
        if (this.user.type === "administrator") {
            console.log("access to change - granted")
            return true
        } else {
            console.log('access to change - denied')
            return false
        }
    }

}

const john = new ContentSecurity(new AbstractUser('simple'))
const adam = new ContentSecurity(new AbstractUser('administrator'))
const adams = new ContentSecurity(new AbstractUser(''))


john.getContent()
console.log('=======')
adam.getContent()
console.log('=======')
adams.getContent()
