// richiamo i bottoni e dichiaro le variabili

let bottonNumbers = document.querySelectorAll(".key");
let resultElem    = document.querySelector(".result");
let operationBottons = document.querySelectorAll(".simbol");
let resultElemOperation = "";
let operator = "";

console.log(bottonNumbers);

// aggiungo event listener a tutti i bottoni dei numeri in modo che il numero cliccato venga concatenato con quello sullo schermo

for (let i = 0; i < bottonNumbers.length; i++) {
    const bottonNumber = bottonNumbers[i];
    bottonNumber.addEventListener("click", clickNumber);
}



console.log(operationBottons);


// aggiungo event listener a tutti i bottoni degli operatori

for (let i = 0; i < operationBottons.length; i++) {
    const operationBotton = operationBottons [i];
    operationBotton.addEventListener("click", clickOperator);
}

// aggiungo event listener all'operatore uguale

const equalButton = document.querySelector(".key-special");

equalButton.addEventListener("click", operationResult);

