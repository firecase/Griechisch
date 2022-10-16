class Buchstabe {
    constructor (grossbuchstabe, kleinbuchstabe, aussprache, lateinischerbuchstabe, id) {
        this.Grossbuchstabe = grossbuchstabe;
        this.Kleinbuchstabe = kleinbuchstabe;
        this.Aussprache = aussprache;
        this.Lateinischerbuchstabe = lateinischerbuchstabe;
        this.ID = id;
    }
}

class rBuchstabe {
    constructor (griechischerbuchstabe, aussprache, lateinischerbuchstabe, id) {
        this.Griechischerbuchstabe = griechischerbuchstabe;
        this.Aussprache = aussprache;
        this.Lateinischerbuchstabe = lateinischerbuchstabe;
        this.ID = id;
    }
}

var Alphabet = [
    new Buchstabe("Α", "α", "Alpha", "A", "1"),
    new Buchstabe("Β", "β", "Beta", "B", "2"),
    new Buchstabe("Γ", "γ", "Gamma", "G", "3"),
    new Buchstabe("Δ", "δ", "Delta", "D", "4"),
    new Buchstabe("Ε", "ε", "Epsilon", "E", "5"),
    new Buchstabe("Ζ", "ζ", "Zeta", "Z", "6"),
    new Buchstabe("Η", "η", "Eta", "Ä", "7"),
    new Buchstabe("Θ", "θ", "Theta", "TH", "8"),
    new Buchstabe("Ι", "ι", "Iota", "I", "9"),
    new Buchstabe("Κ", "κ", "Kappa", "K", "10"),
    new Buchstabe("Λ", "λ", "Lamda", "L", "11"),
    new Buchstabe("Μ", "μ", "Mü", "M", "12"),
    new Buchstabe("Ν", "ν", "Ny", "N", "13"),
    new Buchstabe("Ξ", "ξ", "Xi", "X", "14"),
    new Buchstabe("Ο", "ο", "Omikron", "O (kurz)", "15"),
    new Buchstabe("Π", "π", "Pi", "P", "16"),
    new Buchstabe("Ρ", "ρ", "Rho", "R", "17"),
    new Buchstabe("Σ", "σ", "Sigma", "S", "18"),
    new Buchstabe("Τ", "τ", "Tau", "T", "19"),
    new Buchstabe("Υ", "υ", "Ypsilon", "Y", "20"),
    new Buchstabe("Φ", "φ", "Phi", "F", "21"),
    new Buchstabe("Χ", "χ", "Chi", "CH", "22"),
    new Buchstabe("Ψ", "ψ", "Psi", "PS", "23"),
    new Buchstabe("Ω", "ω", "Omega", "O (lang)", "24")
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
    var randomAlphabet = [];
    var randomBuchstabe;
    var randomAlphabetlength;
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
        var random_uppercase_lowercase = getRandomInt(2);
        var random_letter = getRandomInt(Alphabet.length);
        var content_one;
        var content_two = document.createTextNode(Alphabet[random_letter].Aussprache);
        var content_three = document.createTextNode(Alphabet[random_letter].Lateinischerbuchstabe);

        if (random_uppercase_lowercase === 0) {
            content_one = document.createTextNode(Alphabet[random_letter].Grossbuchstabe);
        } else {
            content_one = document.createTextNode(Alphabet[random_letter].Kleinbuchstabe);
        }

        if (randomAlphabet.length === 0) {
            randomBuchstabe = new rBuchstabe (content_one, content_two, content_three, Alphabet[random_letter].ID);
            randomAlphabet.push(randomBuchstabe);
        }

        randomAlphabetlength = randomAlphabet.length;
        console.log(randomAlphabetlength);

        for (var b = 0; b < randomAlphabetlength; b++) {
            if (randomAlphabet[b].ID === Alphabet[random_letter].ID) {
                console.log('wow');
            } /*else {
                randomBuchstabe = new rBuchstabe (content_one, content_two, content_three, Alphabet[random_letter].ID);
                randomAlphabet.push(randomBuchstabe);
                console.log(randomAlphabet);
            }*/
        }

        for (var c = 0; c < 3; c++) {
            var td = document.createElement('td');

            if (c === 0) {
                td.appendChild(content_one);
            } else if (c === 1) {
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