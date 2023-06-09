//Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un Arreglo
// con los mismos números pero eliminando los repetidos.

let numeros =[2,5,6,7,2,4,6,12]

let noRepetidos = numeros.reduce((array, numero)=>
{if(!array.includes(numero)){
    array.push(numero);
  }
  return array}, [])

   console.log(numeros)
   console.log(noRepetidos)