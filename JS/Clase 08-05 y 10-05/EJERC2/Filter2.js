//Mostrar por consola los numeros pares de un array

let numeros = [3, 7, 6, 13, 2, 24, 99];

function losPares(arrayNums = new array){
    const pares = numeros.filter(elemento => elemento %2 ==0)
    return pares;
}

console.log(numeros)
console.log(losPares(numeros))

