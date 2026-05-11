//1) Quali sono i tipi primitivi principali in TypeScript?

//I dati primitivi in ts sono simili a quelli in js: abbiamo booleani, numeri, stringhe, undefined, null, ma ts introduce anche la novità ANY che non si utilizza in quanto spegne il controllo del file. Altra novità è l'operatore di assegnazione => :

//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const nome: string = "Emanuela";
const età: number = 27;
const studiaTS: boolean = true;

//3) Tipizza il parametro della seguente funzione:
//const greet = (name) => { return "Ciao " + name }

const greet = (name: string) => {
  return "Ciao" + " " + name;
};

console.log(greet("Emanuela"));

//4) Specifica il tipo di ritorno della seguente funzione:
//const sum = (a: number, b: number) => { return a + b }

const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(4, 5));

//:number mi speicifica che il valore di ritorno sarà un numero

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const calcolo = (prezzo: number): number => {
  return prezzo * 1.22;
};
const prezzofinale = calcolo(200);
console.log("Il prezzo finale con IVA è di" + " " + prezzofinale);

//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const lunghezza = (a: string, b: string): number => {
  return (a + b).length;
};
console.log(lunghezza("Ciao", "Emanuela"));

//7) Cos'è un Type Union e come si scrive?

//Un Type Union è un unione di valori primitivi che posso assegnare a delle variabili. Posso mischiarle tra loro con questa assegnazione |. Quindi posso mixare string|number o altri valori.

//8) Crea una variabile che possa contenere un numero, null o undefined.

let mix: number | null | undefined;
mix = 27;
mix = null;
mix = undefined;
console.log(mix);

//9) Crea un tipo per rappresentare i mesi dell'anno usando union di stringhe letterali.

type mesi =
  | "Gennaio"
  | "Febbraio"
  | "Marzo"
  | "Aprile"
  | "Maggio"
  | "Giugno"
  | "Luglio"
  | "Agosto"
  | "Settembre"
  | "Ottobre"
  | "Novembre"
  | "Dicembre";

let mesecorrente: mesi;
mesecorrente = "Maggio";
console.log(mesecorrente);

//10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]

let numeri: number[] = [1, 2, 3];
let numer1: string[] = ["1", "2", "3"];

//oppure la sintassi Generics

let numGen: Array<number> = [1, 2, 3];

//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

//Una tupla è una particolare array che ci permette di attribuire il tipo per ogni singolo elemento nell'ordine in cui lo definiamo.

let tuple: readonly [string, string, string, number, number] = [
  "Emanuela",
  "Elimane",
  "Sara",
  27,
  2,
];
console.log(tuple);
console.log(tuple.length);
console.log(tuple.slice(2));

//12) Qual è la differenza tra type e interface?

//Il type mi permette di creare un tipo di dato personalizzato che poi andrò semplicemente a richiamre leggendone le proprietà una volta definito. Inoltre il type a differenza dell'Interface ci permette il metodo UNION TYPE, quindi possiamo stabilire in anticipo il mix di valori assegnabili. L'Interface è un metodo che mi permette di creare lo stampino del mio dato con tutte le proprietà che deve avere. L'Interface, come le classi in js è dotato del metodo EXTENDS che mi permetterà di estendere e aggiungere nuove proprietà a un altro oggetto.

//13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface identità {
  firstname: string;
  lastname: string;
  age: number;
}

interface Emanuela extends identità {
  lavoro: boolean;
}

const Emanuela1 = {
  firstname: "Emanuela",
  lastname: "Carrubba",
  age: 27,
};
console.log(Emanuela1);

const Emanuela2: Emanuela = {
  firstname: "Emanuela",
  lastname: "Carrubba",
  age: 27,
  lavoro: false,
};
console.log(Emanuela2);

//14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface dati {
  email: string;
  telefono?: string;
}

let utente: dati = {
  email: "emanuela_carrubba_@hotmail.com",
  telefono: "33333333",
};
console.log(utente);

let utente1: dati = {
  email: "lalala@gmail.com",
};
console.log(utente1);

//15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface studente {
  nome: string;
  voto: string | number;
}

const classe: studente[] = [
  { nome: "Emanuela", voto: 10 },
  { nome: "Sara", voto: "Ottimo" },
  { nome: "Elimane", voto: 10 },
];
console.log(classe);
console.log(classe[2]);

interface veicolo {
  modello: string;
  numeroporte: number;
  annouscita: number;
  moderna: boolean;
}

let autonuova: veicolo = {
  modello: "fiat",
  numeroporte: 4,
  annouscita: 2020,
  moderna: true,
};

interface auto extends veicolo {
  assicurazione: boolean;
}

let auto1: auto = {
  modello: "opel",
  numeroporte: 5,
  annouscita: 2015,
  moderna: true,
  assicurazione: true,
};
console.log(auto1);
console.log(auto1.modello);
console.log(auto1.moderna);

interface ferrari extends veicolo {
  assicurazione: boolean;
  suv: boolean;
}

let miaFerrari: ferrari = {
  modello: "Purosangue",
  numeroporte: 4,
  annouscita: 2024,
  moderna: true,
  assicurazione: true,
  suv: true,
};
console.log(miaFerrari);
console.log(miaFerrari.suv);
