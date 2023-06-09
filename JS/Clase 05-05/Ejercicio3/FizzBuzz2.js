texto1 = prompt("Ingrese un texto: ");
texto2 = prompt("Ingrese otro texto: ");
limite = prompt("Ingrese limite hasta donde tiene que contar fizzbuzz: ")
parseInt = Number(limite);

num1 = prompt("Ingrese primer argumento numerico para fizzbuzz");
parseInt = Number(num1);
num2 = prompt("Ingrese segundo argumento numerico para fizzbuzz");
fizzbuzz2(texto1, texto2)
parseInt = Number(num2);

function fizzbuzz2(texto1, texto2){
    
let n = 1;
    while ( n < limite){
        if( n % num1 == 0){
        console.log(texto1)}
        else if (n % num2 == 0){
        console.log(texto2)}
        else{
            console.log(n);}
        n+=1;
    }
}