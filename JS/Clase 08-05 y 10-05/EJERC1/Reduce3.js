//Teniendo un Arreglo de números (llamado numbers), usá .reduce() para obtener el máximo valor 
//que posea el Arreglo. 
let numeros = [5, 4, 1, 9, 2]

let max = numeros.reduce((maximo, numeroActual)=>{
    if(numeroActual> maximo)
       return numeroActual
    else{
        return maximo}}
   );

    console.log(numeros)
    console.log(max)