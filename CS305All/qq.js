/* eslint-disable require-jsdoc */
/**
 * 
 * @param {String} name 
 * @returns{String} 
 */


function sayHi(name) {

    console.log("Hi " , name);

    return "Bye " + name;

}

const sayHiReturn = console.log(sayHi() );