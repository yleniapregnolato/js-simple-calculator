// richiamo i bottoni dei numeri

let bottonNumbers = document.querySelectorAll(".key");
let resultElem    = document.querySelector(".result");
console.log(bottonNumbers);

// aggiungo event listener a tutti i bottoni dei numeri in modo che il numero cliccato venga concatenato con quello sullo schermo

for (let i = 0; i < bottonNumbers.length; i++) {
    const bottonNumber = bottonNumbers[i];
    bottonNumber.addEventListener("click", function () {
        console.log(resultElem.innerHTML);
        if (resultElem.innerHTML === "0") {
            resultElem.innerHTML = "";
        }
        resultElem.innerHTML += this.innerHTML;
    });



}

// richiamo i bottoni delle operazioni

let operationBotton = document.querySelectorAll(".simbol");
console.log(operationBotton);

let resultElemOperation = "";

// aggiungo event listener a tutti i bottoni degli operatori

for (let i = 0; i < operationBotton.length; i++) {
    const buttonOperation = operationBotton [i];
    buttonOperation.addEventListener("click", function(){
       
    })
}

