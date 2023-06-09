function patito(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

limite = prompt("Ingrese un número del 1 al 10: ");
Number.parseInt(limite);
while(limite > 10){
    limite = prompt("Ingrese un número menor o igual a 10: ")
    Number.parseInt(limite);
}
numRandomUsuario = prompt("Adivina el número al azar: ");
numRandomMaquina = patito(1, limite);

 if(numRandomUsuario == numRandomMaquina){
    alert("Acertaste :D")
}
else{
    if (numRandomUsuario > numRandomMaquina)
    alert("fallaste, el número ingresado es mayor al número al azar: "+ numRandomMaquina)
    if (numRandomUsuario < numRandomMaquina)
    alert("fallaste, el número ingresado es menor al número al azar: "+ numRandomMaquina)
}

