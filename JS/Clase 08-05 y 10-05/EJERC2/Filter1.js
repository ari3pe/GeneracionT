//Imprimir solo los números mayores o iguales que 5 en un arreglo

let numeritos = [1,2,12,3,4,5,6,11]

function mayoresOIgualesA5(arrayNums = new array){
  const mayoresa5 = arrayNums.filter(element => element >= 5)

  return mayoresa5
}

console.log(numeritos)
console.log(mayoresOIgualesA5(numeritos))