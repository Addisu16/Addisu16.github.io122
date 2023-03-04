// eslint-disable-next-line require-jsdoc
export function productOfNumbers(number){
    let product=1;
    while(number>0){
        let number1=number%10;
         product=product*number1;
         number=Math.floor(number/10);
    }
         return product;
    }

    console.log("Expect 10: ",productOfNumbers(1234));
    console.log("Expect 3: ",productOfNumbers(102));
    console.log("Expect 8: ",productOfNumbers(8));

    
// eslint-disable-next-line require-jsdoc
export function sumOfNumbers(number){
    let sum=0;
    while(number>0){
        let number1=number%10;
         sum=sum+number1;
         number=Math.floor(number/10);
}
return sum;
}
console.log("Expect 24: ",sumOfNumbers(1234));
console.log("Expect 0: ",sumOfNumbers(102));
console.log("Expect 8: ",sumOfNumbers(8));