var listaDeSuper = []

listaDeSuper= ["Shampoo", "fideos", "queso rallado", "huevos"] 
let otraLista= ["a", "b", "c", "d"] 

let primerElemento = listaDeSuper[0]
let ultimoElemento = [listaDeSuper.length-1]

listaDeSuper[ultimoElemento]

listaDeSuper.push("mirindaDeNaranja", "rapiditas")
listaDeSuper.unshift("azucar", "jugo")

let noHabia = listaDeSuper.pop("fideos")
let comprado = listaDeSuper.shift("mirindaDeNaranja")

function logitems(array=new array){
    array.forEach(element => console.log(element))
}

logitems(listaDeSuper)

logitems(otraLista);