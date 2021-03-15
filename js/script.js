// // esercizio 1
// // Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// //  Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
const biciclette = [
    {
        "nome": "licorne bike",
        "peso": 200
    },
    {
        "nome": "van rysel",
        "peso": 340
    },
    {
        "nome": "triban",
        "peso": 170
    },
    {
        "nome": "wilier",
        "peso": 270
    },
    {
        "nome": "atala",
        "peso": 130
    },
    {
        "nome": "aeroad",
        "peso": 150
    }
];
var [biciLeggera] = biciclette;
biciclette.forEach((element) => {
    console.log(biciLeggera);
    if (biciLeggera.peso > element.peso) {
        biciLeggera.peso = element.peso;
    }
});
console.log(`
la bici piu leggera è ${biciLeggera.nome}
`);




// esercizio 2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console
const dati = [];
const squadre = [
    {
        nome: "juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "roma",
        puntiFatti: 0,
        fallisSubiti: 0
    },
    {
        nome: "atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    }
];
const numRandom = () => Math.floor(Math.random() * 11);
squadre.forEach((element) => {
    element.puntiFatti = numRandom();
    element.falliSubiti = numRandom();
    var {nome, falliSubiti} = element;
    const squadra = {}
    squadra.nome = nome;
    squadra.falliSubiti = falliSubiti;
    dati.push(squadra);
});
console.log(dati);
console.log(squadre);

