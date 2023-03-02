export function sumAndProductOutput(number){
    let sum=0;
    let product=1;
    while(number>0){
        let number1=number%10;
         sum=sum+number1;
         product=product*number1;
         number=Math.floor(number/10);;
    }
    console.log("The sum of the numbers is: "+sum)
    console.log("The product of the numbers is: "+product);
}
sumAndProductOutput(1234);
sumAndProductOutput(102);
sumAndProductOutput(8);