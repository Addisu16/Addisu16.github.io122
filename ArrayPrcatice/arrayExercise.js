/**
 * 
 * @param {Array} expArray is array of brackets
 * @returns {String} balanced or not balanced
 */

function isBalanced(expArray){
  const expStack=[];
   for(const bracket of expArray){
     if(bracket==="{"){
      expArray.push(bracket);

     }else{
      const popBracket=expStack.pop();
      if(popBracket!="{"){
        return "not balanced";
      }
     }
}
if(expStack.length===0){
  return "balanced";
}else{
return "not balanced";
}
}


console.log("expect it's balanced",isBalanced(["{","}","{"]));

console.log("expect not balanced: ",isBalanced(["{","}","{","}"]));