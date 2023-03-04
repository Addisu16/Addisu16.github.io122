
/**
 * 
 * @param {Array} array input  
 * @returns {Array}reversed array 
 */
function reverseArray(array){
    let newArrays=[];
    for(let i=array.length-1;i>=0;i--){
        val= array[i];
        newArrays.push(val);   
    }
    return newArrays;

}

let arrayTest=reverseArray([1,2,3]);
console.log(arrayTest);

//Score Exam

/**
 * 
 * @param {Array} studentAnswers 
 * @param {Array} correctAnswers 
 * @returns {Array}
 */
function scoreExams(studentAnswers,correctAnswers){
/*loop through each student and get score--count of correct*/
for(const aStudent of stuAnswers){
    const numCorrect=[];
    const score=scoreStudent(aStudent,correctAnswers);
    numCorrect.push(score);
}
return numCorrect;
}


/**
 * 
 * @param {Array} stuAns 
 * @param {Array} corrAns 
 * @return{Array}
 */
function scoreStudent(stuAns,corrAns){
    let numCorrect=0;
for(let i=0;i<stuAns.length;i++){
   if(stuAns[i]===corrAns[i]){
    numCorrect+=1;
   }
}
return numCorrect;
}

