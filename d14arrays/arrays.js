
 
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
 function maxOfThree(a, b, c){ 
    if(a>b&&a>c)return a;
    if(b>a&&b>c)return b;
    else
    return c;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
 function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
 function multiply(arr){
    let tot = 1;
    for(let i=0;i<arr.length;i++){
        tot=arr[i]*tot;
    }

    return tot;
}
/**
 * 
 * @param {String} word of array expected 
 * @returns {String}the largest word from the array will be expected
 */
function findLongestWord(word){
    for(let i=0;i<word.length;i++){
        if(word[i].length>word[i+1].length){
            return word[i]; 
        }
        return word[i+1]; 
    }
}

console.log(multiply([1,2,3,4]));
console.log(maxOfThree(1,2,1));
console.log(sum([1,2,3,4]));
console.log(findLongestWord(["Apple","Orange","AA","BB","C"]));


