"use strict";
//1) Quali sono i tipi primitivi principali in TypeScript?
//I dati primitivi in ts sono simili a quelli in js: abbiamo booleani, numeri, stringhe, undefined, null, ma ts introduce anche la novità ANY che non si utilizza in quanto spegne il controllo del file. Altra novità è l'operatore di assegnazione => :
//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
const nome = "Emanuela";
const età = 27;
const studiaTS = true;
//3) Tipizza il parametro della seguente funzione:
//const greet = (name) => { return "Ciao " + name }
const greet = (name) => {
    return "Ciao" + " " + name;
};
console.log(greet("Emanuela"));
//4) Specifica il tipo di ritorno della seguente funzione:
//const sum = (a: number, b: number) => { return a + b }
const sum = (a, b) => {
    return a + b;
};
console.log(sum(4, 5));
//:number mi speicifica che il valore di ritorno sarà un numero
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const calcolo = (prezzo) => {
    return prezzo * 1.22;
};
const prezzofinale = calcolo(200);
console.log("Il prezzo finale con IVA è di" + " " + prezzofinale);
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const lunghezza = (a, b) => {
    return (a + b).length;
};
console.log(lunghezza("Ciao", "Emanuela"));
//7) Cos'è un Type Union e come si scrive?
//Un Type Union è un unione di valori primitivi che posso assegnare a delle variabili. Posso mischiarle tra loro con questa assegnazione |. Quindi posso mixare string|number o altri valori.
//8) Crea una variabile che possa contenere un numero, null o undefined.
let mix;
mix = 27;
mix = null;
mix = undefined;
console.log(mix);
let mesecorrente;
mesecorrente = "Maggio";
console.log(mesecorrente);
//10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]
let numeri = [1, 2, 3];
let numer1 = ["1", "2", "3"];
//oppure la sintassi Generics
let numGen = [1, 2, 3];
//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
//Una tupla è una particolare array che ci permette di attribuire il tipo per ogni singolo elemento nell'ordine in cui lo definiamo.
let tuple = [
    "Emanuela",
    "Elimane",
    "Sara",
    27,
    2,
];
console.log(tuple);
console.log(tuple.length);
console.log(tuple.slice(2));
const Emanuela1 = {
    firstname: "Emanuela",
    lastname: "Carrubba",
    age: 27,
};
console.log(Emanuela1);
const Emanuela2 = {
    firstname: "Emanuela",
    lastname: "Carrubba",
    age: 27,
    lavoro: false,
};
console.log(Emanuela2);
let utente = {
    email: "emanuela_carrubba_@hotmail.com",
    telefono: "33333333",
};
console.log(utente);
let utente1 = {
    email: "lalala@gmail.com",
};
console.log(utente1);
const classe = [
    { nome: "Emanuela", voto: 10 },
    { nome: "Sara", voto: "Ottimo" },
    { nome: "Elimane", voto: 10 },
];
console.log(classe);
console.log(classe[2]);
