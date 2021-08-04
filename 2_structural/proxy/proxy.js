var AbstractUser = /** @class */ (function () {
    function AbstractUser(type) {
        this.type = type;
        this.accessToChange = false;
    }
    AbstractUser.prototype.getContent = function () {
        console.log('some content');
    };
    AbstractUser.prototype.changeContent = function () {
        console.log('Some operations with content...');
    };
    return AbstractUser;
}());
var ContentSecurity = /** @class */ (function () {
    function ContentSecurity(user) {
        this.user = user;
        this.accessToChange = false;
    }
    ContentSecurity.prototype.changeContent = function () {
        if (this.checkAccess()) {
            this.accessToChange = true;
        }
        else {
            this.accessToChange = false;
        }
    };
    ContentSecurity.prototype.getContent = function () {
        if (this.checkAccess()) {
            this.user.getContent();
            this.user.changeContent();
        }
        else {
            this.user.getContent();
        }
    };
    ContentSecurity.prototype.checkAccess = function () {
        console.log("Checking user...");
        if (this.user.type === "administrator") {
            console.log("access to change - granted");
            return true;
        }
        else {
            console.log('access to change - denied');
            return false;
        }
    };
    return ContentSecurity;
}());
var john = new ContentSecurity(new AbstractUser('simple'));
var adam = new ContentSecurity(new AbstractUser('administrator'));
var adams = new ContentSecurity(new AbstractUser(''));
john.getContent();
console.log('=======');
adam.getContent();
console.log('=======');
adams.getContent();
//# sourceMappingURL=proxy.js.map