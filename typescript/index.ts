//1) Quali sono i tipi primitivi principali in TypeScript?


//I dati primitivi in ts sono simili a quelli in js: abbiamo booleani, numeri, stringhe, undefined, null, ma ts introduce anche la novità ANY che non si utilizza in quanto spegne il controllo del file. Altra novità è l'operatore di assegnazione => :


//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const nome: string="Emanuela";
const età:number=27;
const studiaTS: boolean=true;



//3) Tipizza il parametro della seguente funzione:
//const greet = (name) => { return "Ciao " + name }

const greet=(name:string )=>{
    return "Ciao" + " " + name;}

    console.log(greet("Emanuela"));

    //4) Specifica il tipo di ritorno della seguente funzione:
    //const sum = (a: number, b: number) => { return a + b }

    const sum=(a:number, b:number): number=> {
        return a + b
    }; console.log(sum(4, 5))  
 
//:number mi speicifica che il valore di ritorno sarà un numero


//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const calcolo= (prezzo:number):number=>{
    return prezzo * 1.22;
}; 
const prezzofinale= calcolo(200);
console.log("Il prezzo finale con IVA è di" + " " + prezzofinale)