// definisco una funzione per far scomparire lo zero quando inserisco un numero al click del bottone

function clickNumber() {
    console.log(resultElem.innerHTML);
    if (resultElem.innerHTML === "0") {
        resultElem.innerHTML = "";
    }
    resultElem.innerHTML += this.innerHTML;
}


// definisco una funzione per salvare il primo numero inserito e l'operatore scelto

function clickOperator() {
    resultElemOperation = resultElem.innerHTML;
    resultElem.innerHTML = "0";
    operator = this.innerHTML;
    console.log(resultElemOperation, operator);
}

// definisco una funzione per impostare gli operatori con l'operazione alla quale si riferiscono

function operationResult() {
    
    if (operator === "+") {
        result = parseInt(resultElemOperation) + parseInt(resultElem.innerHTML);
        resultElem.innerHTML = result;
        console.log(result);
    }

    if (operator === "-") {
        result = parseInt(resultElemOperation) - parseInt(resultElem.innerHTML);
        resultElem.innerHTML = result;
        console.log(result);
    }

     
    if (operator === "x") {
        result = parseInt(resultElemOperation) * parseInt(resultElem.innerHTML);
        resultElem.innerHTML = result;
        console.log(result);
    }

    console.log(operator);
    if (operator === "÷") {
        result = parseInt(resultElemOperation) / parseInt(resultElem.innerHTML);
        resultElem.innerHTML = result;
        console.log(result); 
    }

   
}

// definisco una funzione per resettare la calcolatrice quando si preme il tasto reset

function reset () {
    result = "";
    clickOperator ();
}