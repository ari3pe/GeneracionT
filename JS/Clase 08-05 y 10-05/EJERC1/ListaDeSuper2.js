var listaDeSuper = []

listaDeSuper= ["Shampoo", "fideos", "queso rallado", "huevos"] 

let primerElemento = listaDeSuper[0]
let ultimoElemento = [listaDeSuper.length-1]

listaDeSuper[ultimoElemento]

listaDeSuper.push("mirindaDeNaranja", "rapiditas")
listaDeSuper.unshift("azucar", "jugo")

console.log(listaDeSuper.length);

let noHabia = listaDeSuper.pop("fideos")
let comprado = listaDeSuper.shift("mirindaDeNaranja")

console.log(listaDeSuper.length)