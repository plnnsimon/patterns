class Page {
    getContent() {
        console.log("Content");
    }

    setTheme() {
        console.log("Theme");
    }
}

class AboutPage extends Page {
    constructor(theme) {
        super();
        this.theme = theme
    }

    getContent() {
        return "About page in " + this.theme.getColor()
    }
    setTheme(theme) {
        this.theme = theme
    }
}

class MainPage extends Page{
    constructor(theme) {
        super();
        this.theme = theme
    }

    getContent() {
        return "Main page in " + this.theme.getColor()
    }
    setTheme(theme) {
        this.theme = theme
    }
}

class Theme {
    getColor() {
        return "Default theme color"
    }
}

class DarkTheme extends Theme { 
    getColor() {
        return 'Dark color'
    }
}

class LightTheme extends Theme { 
    getColor() {
        return 'Light color'
    }
}

const darkTheme = new DarkTheme();
const lightTheme = new LightTheme();

const mainPage = new MainPage(darkTheme)
const aboutPage = new AboutPage(lightTheme)

console.log(mainPage.getContent());
console.log(aboutPage.getContent())

mainPage.setTheme(lightTheme)

console.log(mainPage.getContent());