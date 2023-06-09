let diasDeVacas = 14;
let presupuestoMaximo = 100000;
let comida;
let provisiones = 50;

function gastoEnComida(){
    return presupuestoMaximo / provisiones; 
}

alert("Podés gastar "+ gastoEnComida()+ " en cada comida para que te alcance la plata durante los " +diasDeVacas+ " días de viaje");