
function sumArray(arrayNums = new array){
   const result=  arrayNums.reduce((acumulador,valorActual) => acumulador+= valorActual)
    return result
}

console.log(sumArray([1,2,3]))
console.log(sumArray([10, 3, 10, 4])) 
console.log(sumArray([-5,100])) 