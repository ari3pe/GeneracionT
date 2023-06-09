
const triplicador = a => a * 3;
const multiplicador = (a,b) => a * b;
const division = (a,b) => a/b;
const resto = (a,b) => a % b;

const resultado = resto(division(multiplicador(triplicador(5),12),12),3)
console.log(resultado)