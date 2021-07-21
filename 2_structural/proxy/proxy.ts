class User {
    constructor(public name: string, public type: string) {
        this.name = name
        this.type = type
    }

    getContent(): string {
        return "Some content from page...";
    }

    leavePage(): void {
        console.log("You left the page...");
    }
}

class ContentSecurity {
    constructor(public user: User) {
        this.user = user
    }

    getContent(): string {
        if (this.user.type === "registered") {
            this.user.getContent();
        } else {
            return "You must to register";
        }
    }

    leavePage() {
        this.user.leavePage()
    }
}

const john = new ContentSecurity(new User("John", "registered"))
const jack = new ContentSecurity(new User("Jack", ""))

john.getContent()
jack.getContent()
