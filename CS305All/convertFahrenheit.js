/**
 * 
 * @param {Number} degreeFahrenheit 
 * @returns {Number}by plus value
 */

export function convertFahrenheit(degreeFahrenheit){
    let degreeCelsius=(degreeFahrenheit-32)*0.5556;
    return degreeCelsius;
}
console.log("expect 0: "+ convertFahrenheit (32));
console.log("expect -17.7778: "+ convertFahrenheit (0));
console.log("expect 100: "+ convertFahrenheit (212));