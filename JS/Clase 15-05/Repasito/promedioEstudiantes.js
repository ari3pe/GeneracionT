
class Alumno {
    constructor(nombreYapellido, nota1, nota2, nota3) {
      this.nombreYapellido = nombreYapellido;
      this.nota1 = nota1;
      this.nota2 = nota2;
      this.nota3 = nota3;
    }
  }
  
  const alumno1 = new Alumno("Juan", "aprobado", 10, 10, 10);
  const alumno2 = new Alumno("María", "desaprobado", 2, 2, 4);
  const alumno3 = new Alumno("Pedro", "desaprobado", 1,1,1);
  
  const alumnos = [alumno1, alumno2, alumno3];

function promedio(arrayAlumnos= new array, estadop){

  let aproba2 = arrayAlumnos.filter(estadop => estadop === "aprobado")
   let prom= arrayAlumnos.map(function(alumno){
      return (alumno.nota1 + alumno.nota2 + alumno.nota3)/3
   });


   aproba2.push({
    'nombre completo:': alumnos.nombreYapellido,
    estado: alumnos.estado,
    promedio: alumnos.promedio
  
  })
    
}



console.log(promedio(alumnos));