//Si la temperatura está entre 14°F/32°F o -10°C/0°C, debe retornar "Temperatura baja".
//Si la temperatura está entre 33°F/68°F o 1°C/20°C, debe retornar "Temperatura adecuada".
//Si la temperatura está entre 69°F/95°F o 21°C/35°C, debe retornar "Temperatura alta".
//Si ingresa un valor inválido o una temperatura fuera de ese rango, debe retornar "Temperatura desconocida".


const toFahrenheit = n => (n * 1.8)+32;
const toCelsius = n => (n- 32)/1.8;

const parse = (temp) => {
    const [num, indicator] = temp.split('°');
    if (!["C", "F"].includes(indicator)) return [NaN, null];
    const result = indicator === "C" ? toFarenheit(parseFloat(num)) : toCelsius(parseFloat(num))
    return [result, indicator === "C" ? "F" : "C"]
  }
  
  const temperaturas = [
          {F: [14, 32], C: [-10, 0], msg: 'temperatura baja'},
          {F: [33, 68], C: [1, 20], msg: 'temperatura templada'},
          {F: [69, 95], C: [21, 35], msg: 'temperatura alta'}
  ]
  
  const convert = () => {
    const [temperatura, indicador] = parse(prompt());
    
  };
  console.log(convert())

