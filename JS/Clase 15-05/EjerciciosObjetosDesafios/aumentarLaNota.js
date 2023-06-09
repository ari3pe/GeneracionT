
class Estudiantes{
    constructor(nombre, nota) {
        this.nombre = nombre
        this.nota = nota
    }
}

const nombres = ['Julia', 'Samuel', 'Andrew', 'Golpho', 'Edward', 'Jack']
const notas = [10, 5, 5, 4, 7, 6]

// advanced version
const alumnos = Array.from({length: nombres.length}, ((_, i) => new Estudiantes(nombres[i], notas[i])))

console.log(alumnos)

alumnos.forEach(st => st.note = st.note > 5 ? Math.min(10, st.note + 2) : st.note)

console.log(alumnos)