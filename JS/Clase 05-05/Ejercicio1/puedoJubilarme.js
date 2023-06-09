
let edad=prompt("Introduzca su edad: ")
let genero = prompt("Introduzca su género (hombre o mujer): ");

if(genero.RegExp() == "mujer" && edad >= 60 || genero.RegExp() == "hombre" && edad >= 65){
   return true;
}
else{
    false;
}