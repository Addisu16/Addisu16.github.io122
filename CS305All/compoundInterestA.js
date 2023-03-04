
/**
 * 
 * @param {number} initialAmount 
 * @param {number} annualInterestRate 
 * @param {number} numberOfYearsToCompound 
 * @returns {number}
 */

// eslint-disable-next-line require-jsdoc
export function compoundInterest(initialAmount,annualInterestRate,numberOfYearsToCompound){
    for(let i=0;i<annualInterestRate;i++){
        let totalAmount=initialAmount+i*numberOfYearsToCompound;
        return totalAmount;
    }
}
console.log(compoundInterest(1500,0.15,5));
console.log(compoundInterest(2500,0.15,10));
