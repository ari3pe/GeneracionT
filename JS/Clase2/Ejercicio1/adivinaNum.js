
Number(numSecreto) = 2;
Number(numIngresado) = prompt("¿Cuál es el número secreto?: ");
if(numIngresado === numSecreto){
 alert("adivinaste");
}
else{
    alert("No adivinaste, el número era: " + numSecreto);
    if(numIngresado > numSecreto){
        alert("El número ingresado fue mayor al numero secreto");
    }
    else if(numIngresado < numSecreto){
        alert("El número ingresado fue menor al numero secreto");
    }
}

