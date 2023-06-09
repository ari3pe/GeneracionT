
let texto= "hola que tal como va"
let texto2= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error adipisci autem doloribus beatae, laudantium explicabo ut aperiam aut quam facilis corporis optio velit! Vitae itaque reiciendis incidunt accusamus culpa?"

function cadenaDeCaraceteres(text){
    let arrayTexto=[] 
    arrayTexto = text.split(' ');

    return [arrayTexto.length, arrayTexto[0], arrayTexto[arrayTexto.length-1]] ;
}

console.log(texto)
console.log(cadenaDeCaraceteres(texto));

console.log(texto2)
console.log(cadenaDeCaraceteres(texto2));
