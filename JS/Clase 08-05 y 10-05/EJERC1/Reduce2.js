//Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un nuevo Arreglo
//que contenga solo los números impares.

let numeros = [3, 7, 6, 13, 2, 24, 99];

let impares = numeros.reduce(
 (acumulador, elemento)=>{
    if(elemento % 2 !=0)
    acumulador.push(elemento)
  return acumulador}, [])

    console.log(numeros);
    console.log(impares);
