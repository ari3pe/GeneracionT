
let palabras = ['Et', 'Voluptua', 'Sed', 'At', 'Diam', 'Lorem']

function palabrasMenosDe3Letras(array = new array){
    const palabrasFIltradas = palabras.filter(palabra => palabra.length <= 3)
    return palabrasFIltradas;
}

console.log(palabras)
console.log(palabrasMenosDe3Letras(palabras))
