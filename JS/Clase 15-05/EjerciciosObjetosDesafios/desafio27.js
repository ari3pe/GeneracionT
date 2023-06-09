let personas = [
    {nombre: 'Ana', edad: 28 },
    {nombre: 'María', edad: 24},
    {nombre: 'José', edad: 31}
];

 let result= personas.filter(persona => persona.edad >27)

console.log(result)