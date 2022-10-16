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
    new Buchstabe("Ε", "ε", "Epsilon", "E"),
    new Buchstabe("Ζ", "ζ", "Zeta", "Z"),
    new Buchstabe("Η", "η", "Eta", "Ä"),
    new Buchstabe("Θ", "θ", "Theta", "TH"),
    new Buchstabe("Ι", "ι", "Iota", "I"),
    new Buchstabe("Κ", "κ", "Kappa", "K"),
    new Buchstabe("Λ", "λ", "Lamda", "L"),
    new Buchstabe("Μ", "μ", "Mü", "M"),
    new Buchstabe("Ν", "ν", "Ny", "N"),
    new Buchstabe("Ξ", "ξ", "Xi", "X"),
    new Buchstabe("Ο", "ο", "Omikron", "O (kurz)"),
    new Buchstabe("Π", "π", "Pi", "P"),
    new Buchstabe("Ρ", "ρ", "Rho", "R"),
    new Buchstabe("Σ", "σ", "Sigma", "S"),
    new Buchstabe("Τ", "τ", "Tau", "T"),
    new Buchstabe("Υ", "υ", "Ypsilon", "Y"),
    new Buchstabe("Φ", "φ", "Phi", "F"),
    new Buchstabe("Χ", "χ", "Chi", "CH"),
    new Buchstabe("Ψ", "ψ", "Psi", "PS"),
    new Buchstabe("Ω", "ω", "Omega", "O (lang)")
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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
            image.src = 'src/images/darkmode.svg'
        } else {
            body.classList.add('dark');
            image.src = 'src/images/lightmode.svg'
        }
    })
}

function table() {
    var content = document.querySelector('#content');
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');

    for (var a = 0; a < 1; a++) {
        var tr = document.createElement('tr');
        var headline_one = document.createTextNode('Griechischer Buchstabe');
        var headline_two = document.createTextNode('Aussprache');
        var headline_three = document.createTextNode('Lateinischer Buchstabe');

        for (var b = 0; b < 3; b++) {
            var td = document.createElement('td');

            if (b === 0) {
                td.appendChild(headline_one);
            } else if (b === 1) {
                td.appendChild(headline_two);
            } else {
                td.appendChild(headline_three);
            }

            tr.appendChild(td);
        }

        thead.appendChild(tr);
    }

    for (var a = 0; a < Alphabet.length; a++) {
        var tr = document.createElement('tr');
        var random_greek_letter = getRandomInt(2);
        var random_row = getRandomInt(Alphabet.length);
        var content_one;
        var content_two = document.createTextNode(Alphabet[random_row].Aussprache);
        var content_three = document.createTextNode(Alphabet[random_row].Lateinischerbuchstabe);

        if (random_greek_letter === 0) {
            content_one = document.createTextNode(Alphabet[random_row].Grossbuchstabe);
        } else {
            content_one = document.createTextNode(Alphabet[random_row].Kleinbuchstabe);
        }

        for (var b = 0; b < 3; b++) {
            var td = document.createElement('td');

            if (b === 0) {
                td.appendChild(content_one);
            } else if (b === 1) {
                td.appendChild(content_two);
            } else {
                td.appendChild(content_three);
            }

            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    content.appendChild(table);
}

window.addEventListener('load', () => {
    copyright();
    theme();
    table();
})