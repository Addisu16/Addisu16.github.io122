/**
 * 
 * @param {number} rows given number
 * @param {number} cols given number
 * @returns {Array} sequential array will be generated
 */


function generateSequentialArray(rows, cols) {
    let result = [];
    let counter = 1;
    for(let i = 0; i < rows; i++) {
      let row = [];
      for(let j = 0; j < cols; j++) {
        row.push(counter++);
      }
      result.push(row);
    }
    return result;
  }
  function sayHi(){
    alert("Hello");
  }
  const myHi=sayHi();
  console.log(myHi);
  