let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran"
"de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos"

let arregloDesordenado=[] 
arregloDesordenado = poemaDesordenado.split('');

let arregloOrdenado=[] 

while(arregloDesordenado.length > 0 ){
    arregloDesordenado.forEach(element => arregloOrdenado.push(element))
    arregloDesordenado.forEach(element => arregloOrdenado.unshift(element))
}

console.log(arregloOrdenado)