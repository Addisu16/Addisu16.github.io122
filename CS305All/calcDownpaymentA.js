/* eslint-disable require-jsdoc */
export function calcDownpayment(costOfTheHouse) {
    if (costOfTheHouse >= 0 && costOfTheHouse < 50000) {
        return 0.05 * costOfTheHouse;
    } else if (costOfTheHouse >= 50000 && costOfTheHouse < 100000) {
        return 2500 + 0.1 * (costOfTheHouse - 50000);
    }else if (costOfTheHouse >= 100000 && costOfTheHouse < 200000){
        return 7500 + 0.15 * (costOfTheHouse - 100000);
    }else if(costOfTheHouse>200000){
    return 20000+0.1*(costOfTheHouse-200000);
}else{
    return ;
}
}
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ",calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));

