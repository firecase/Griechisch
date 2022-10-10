class Buchstabe {
    constructor(grossbuchstabe, kleinbuchstabe, aussprache, lateinischerbuchstabe) {
        this.Grossbuchstabe = grossbuchstabe;
        this.Kleinbuchstabe = kleinbuchstabe;
        this.Aussprache = aussprache;
        this.Lateinischerbuchstabe = lateinischerbuchstabe;
    }
}

var Alphabet = [
    new Buchstabe("Α", "α", "Alpha", "A"),
    new Buchstabe("Β", "β", "Beta", "B"),
    new Buchstabe("Γ", "γ", "Gamma", "G"),
    new Buchstabe("Δ", "δ", "Delta", "D"),
    new Buchstabe("Ε", "ε", "Epsilon", "E")
];

function copyright() {
    var copyright = document.querySelector('#copyright');
    var date = new Date().getFullYear();
    var content = "© " + date + " Tim Neufeld";

    copyright.innerHTML = content;
}

function theme() {
    var button = document.querySelector('#theme');
    var image = document.querySelector('#theme img');
    var body = document.body;

    button.addEventListener('click', function() {
        if (body.className.includes('dark')) {
            body.classList.remove('dark');
            image.src = 'src/darkmode.svg'
        } else {
            body.classList.add('dark');
            image.src = 'src/lightmode.svg'
        }
    })
}

window.addEventListener('load', () => {
    copyright();
    theme();
})