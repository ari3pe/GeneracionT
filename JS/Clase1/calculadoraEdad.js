let añoIngresado = prompt("Indique cuál es su edad: ");
console.log(añoIngresado);
añoIngresado = parseInt(añoIngresado);

function ConversionAñoADias(año){
    let dias = 365;
    return año * dias;
}

console.log(ConversionAñoADias(añoIngresado));
