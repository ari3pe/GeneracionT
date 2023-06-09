
    //curiosidadCuriosa
//Las variables var pueden ser modificadas y re-declaradas dentro de su ámbito; las variables let
//pueden ser modificadas, pero no re-declaradas; las variables const no pueden ser modificadas ni 
 //re-declaradas. Todas ellas se elevan a la parte superior de su ámbito.

 const miAuto = [];

 miAuto.marca="asdajs";
 miAuto.año = 2023;
 miAuto.nuevo = true;
 let propertyKey = "Fiat";
 miAuto.modelo = propertyKey;

 let anotherPropertyKey = "precio";
 miAuto.precio = anotherPropertyKey;
 let nextProperty = "color";
 miAuto.color = nextProperty;

for (const key in miAuto) {
    console.log(key + ': ' + miAuto[key]); 
}