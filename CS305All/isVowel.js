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


function write2file(content){
    fsys.writeFile("./testWrite.txt", content,function()[]);
}
    const returnVal = write2file( Math.max(1, 2, 3));