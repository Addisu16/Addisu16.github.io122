
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

// function scoreMath(studentScore,correctAnswer){
//     let count=0;
//     let temp=[];
//     let temp2=[];
//     for(let i=0;i<studentScore.length;i++){
//         for(let j=0;j<studentScore[i].length;j++){
//           temp=studentScore[i][j]; 
              
//     for(let i=0;i<correctAnswer.length;i++){
//            temp2=correctAnswer[i][j];
//         }
    
//     if(temp===temp2){
//         count++;
//     }
// }
//     return count;

//     }
//     return ;
// }
// }

// const a=scoreMath(([1,2,1,3],[1,2,1,4],[2,1,3,4]),([1,2,3,4]))
//  console.log(a);
