let edad=prompt("Ingrese su edad.")

if(edad<18) {
alert("No puede pasar al bar.")
} 
else if(edad<21){
alert("Puede pasar al bar, pero no puede tomar alcohol.")
} 
else if(edad <0){
    alert("Error, su edad no es válida.")
}
else if(edad %2 != 0){
 alert("¿Sabías que tu edad es impar?")
}
else{
alert("Puede pasar al bar y tomar alcohol. Felicidades por llegar a la mayoría de edad")
}
