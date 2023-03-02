/* eslint-disable require-jsdoc */
/**
 * 
 * @param {character} character 
 * @returns {boolean}
 */

export function isVowel(character){
    return (character==="a"||character==="e"||character=="i"||
    character==="o"||character==="u")?true:false;
}
console.log(isVowel("d"));