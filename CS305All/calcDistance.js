/* eslint-disable require-jsdoc */
 export function calcDistance(x1,y1,x2,y2){
    let distance=Math.sqrt(((x2-x1)**2)+((y1-y2)**2));
    return Math.floor(distance);
}
console.log("expect 7.07 : "+ calcDistance (0, 0, 5, 5));