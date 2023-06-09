//Teniendo un Arreglo llamado notasDeTPs(con números del 1 al 10), usá .reduce() para calcular la nota
//promedio final de todos los trabajos prácticos de este curso.

let notasDeTPs = [4, 7, 8, 5, 10]
let notaFinal = notasDeTPs.reduce((sum, nota)=>{
return sum + nota;
}, 0);

const promedio = notaFinal / notasDeTPs.length;

    console.log(notasDeTPs)
    console.log(promedio)