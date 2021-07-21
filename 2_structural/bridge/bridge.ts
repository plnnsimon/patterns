class Page {
    protected theme: Theme

    constructor(theme: Theme) {
        this.theme = theme
    }

    getContent(): string {
        return `Content with ${this.theme.theme}`
    }

    setTheme(theme: Theme) {
        this.theme = theme
    }
}

class AboutPage extends Page {
    
    getContent():string {
        return `About page. Content with ${this.theme.getColor()}`
    }
}

class MainPage extends Page {
    
    getContent():string {
        return `Main page. Content with ${this.theme.getColor()}`
    }
}

class Theme {
    theme: string
    constructor() {
        this.theme = "Default"
    }
    getColor(): string {
        return `${this.theme} color theme`
    }
}

class DarkTheme extends Theme {
    theme: string
    constructor() {
        super()
        this.theme = "Dark"
    }
}

class LightTheme extends Theme {
    theme: string
    constructor() {
        super()
        this.theme = "Light"
    }
}

const mainPage = new MainPage(new DarkTheme());

const aboutPage = new AboutPage(new LightTheme());

console.log(mainPage.getContent())

console.log(aboutPage.getContent());

mainPage.setTheme(new LightTheme())

console.log(mainPage.getContent());

