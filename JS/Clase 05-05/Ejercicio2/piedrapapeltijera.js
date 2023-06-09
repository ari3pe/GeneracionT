function patito(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var salir = 3;

var opciones = ["Piedra", "Papel", "Tijera", "Salir"];

var opcionUsuario;
var opcionMaquina = patito(0,3);

while(opcionUsuario != salir){
opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\n Salir: 3 ", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("la máquina eligió " + opciones[opcionMaquina]);


    if(opcionUsuario == piedra)
    {
        if(opcionMaquina == piedra)
        {
            alert("Empate!");
        }
        else if(opcionMaquina == papel)
        {
            alert("Perdiste :( ");
        }
        else if(opcionMaquina == tijera)
        {
            alert("Ganaste!");
        }
    }
    else if(opcionUsuario == papel)
    {
        if(opcionMaquina == piedra)
        {
            alert("Ganaste!");
        }
        else if(opcionMaquina == papel)
        {
            alert("Empate!");
        }
        else if(opcionMaquina == tijera)
        {
            alert("Perdiste!");
        }
    }
    else if(opcionUsuario == tijera)
    {
        if(opcionMaquina == piedra)
        {
            alert("Perdiste!");
        }
        else if(opcionMaquina == papel)
        {
            alert("Ganaste!");
        }
        else if(opcionMaquina == tijera)
        {
            alert("Empate!");
        }
    }
    else
    {
        alert("Elegí una opción dentro del rango permitido!");
    }
}

