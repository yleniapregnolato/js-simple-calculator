// richiamo i bottoni e dichiaro le variabili

let bottonNumbers = document.querySelectorAll(".key");
let resultElem    = document.querySelector(".result");
let operationBottons = document.querySelectorAll(".simbol");

// variabile per salvare il primo numero digitato
let resultElemOperation = "";
let operator = "";
let result = 0;

console.log(bottonNumbers);

// aggiungo event listener a tutti i bottoni dei numeri in modo che il numero cliccato venga concatenato con quello sullo schermo

for (let i = 0; i < bottonNumbers.length; i++) {
    const bottonNumber = bottonNumbers[i]; //object (elemento HTML)
    bottonNumber.addEventListener("click", clickNumber);
}



console.log(operationBottons);


// aggiungo event listener a tutti i bottoni degli operatori

for (let i = 0; i < operationBottons.length; i++) {
    const operationBotton = operationBottons [i]; // object (elemento HTML)
    operationBotton.addEventListener("click", clickOperator);
}

// aggiungo event listener all'operatore uguale

const equalButton = document.querySelector(".key-special");

equalButton.addEventListener("click", operationResult);

// aggiungo event listener al bottone reset

let resetButton = document.querySelector(".simbol-special");

resetButton.addEventListener("click", reset);

