let edad = 18;
let edadEnDias= edad * 365;

let edadMaxima = 50;
let edadMaximaEnDias = edadMaxima * 365;

let snack = "3D";
let snacksPorDia = 10;

let snacksRestantesPorElRestoDeMiVida = (edadMaximaEnDias-edadEnDias) / snacksPorDia; 
alert("Necesitarás "+ snacksRestantesPorElRestoDeMiVida+ " snacks para que te alcancen hasta los " + edadMaxima + " años, ñamñam");

function guitaEn3D(){
    let precioDeLos3D = 200;
    return snacksRestantesPorElRestoDeMiVida * precioDeLos3D 
}

alert("En un país económicamente estable gastaría: $"+guitaEn3D() + ". Pero en Argentina ta complicado.");