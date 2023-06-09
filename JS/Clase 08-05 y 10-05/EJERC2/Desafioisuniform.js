let iguales = [32,32]
let desiguales= ["a", "b", "a", "a"] 
function isUniform(array= new array){
    for(i = 0; i<= array.length ; i++){ 
        if (array[i]  != array[i+1]){
            return false;
        }
        return true;
    }
}

console.log(isUniform(iguales));
console.log(isUniform(desiguales));