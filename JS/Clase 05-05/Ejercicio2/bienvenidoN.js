
function tePresentoA(num){
    return console.log("te presento a " + num)
    num += 1;

}
n = prompt("Ingrese un número : ")
for(i= n; i <= n+5; i++){
    console.log("¡Bienvenido, " + n+ tePresentoA(n));
    n +=1;
}