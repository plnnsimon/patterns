var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Page = /** @class */ (function () {
    function Page(theme) {
        this.theme = theme;
    }
    Page.prototype.getContent = function () {
        return "Content with " + this.theme.theme;
    };
    Page.prototype.setTheme = function (theme) {
        this.theme = theme;
    };
    return Page;
}());
var AboutPage = /** @class */ (function (_super) {
    __extends(AboutPage, _super);
    function AboutPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AboutPage.prototype.getContent = function () {
        return "About page. Content with " + this.theme.getColor();
    };
    return AboutPage;
}(Page));
var MainPage = /** @class */ (function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainPage.prototype.getContent = function () {
        return "Main page. Content with " + this.theme.getColor();
    };
    return MainPage;
}(Page));
var Theme = /** @class */ (function () {
    function Theme() {
        this.theme = "Default";
    }
    Theme.prototype.getColor = function () {
        return this.theme + " color theme";
    };
    return Theme;
}());
var DarkTheme = /** @class */ (function (_super) {
    __extends(DarkTheme, _super);
    function DarkTheme() {
        var _this = _super.call(this) || this;
        _this.theme = "Dark";
        return _this;
    }
    return DarkTheme;
}(Theme));
var LightTheme = /** @class */ (function (_super) {
    __extends(LightTheme, _super);
    function LightTheme() {
        var _this = _super.call(this) || this;
        _this.theme = "Light";
        return _this;
    }
    return LightTheme;
}(Theme));
var mainPage = new MainPage(new DarkTheme());
var aboutPage = new AboutPage(new LightTheme());
console.log(mainPage.getContent());
console.log(aboutPage.getContent());
mainPage.setTheme(new LightTheme());
console.log(mainPage.getContent());
//# sourceMappingURL=bridge.js.map