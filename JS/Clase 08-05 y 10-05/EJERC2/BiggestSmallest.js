//3- La función debe devolver por consola un Arreglo que contenga los números mínimo y máximo.

let nums=[2,3,5,27,20]

function biggest_smallest(arraynums= new array){
    let i = 0;
    let j = 0;
    let bigger=arraynums[i];
    let smallest = arraynums[j];

    arraynums.forEach(element => { 
        if(element > bigger){
       bigger = element
        i++ }
       else if(element < smallest){
       smallest = element;
        j++}
     });

     return [bigger, smallest];
}

console.log(biggest_smallest(nums))
