
//Retornar solo los strings de un array mix

const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [ 1, 2, 3],
    'Dolore.'
   ];

   function soloStrings(arrayMix =new array){
    const soloString = mix.filter(elemento => typeof(elemento) === 'string')
    return soloString
   }

   console.log(mix)
   console.log(soloStrings(mix))



   