// const roundedResult = roundTo(2.123, 2);
// console.log(roundedResult); // 2.12
 
// const roundedResult = roundTo(1.123456789, 6);
// console.log(roundedResult); // 1.123457




function roundNumber (float, int) {
   return Math.round(float * Math.pow(10,int)) / Math.pow(10,int);
}


console.log(roundNumber(2.123, 2)); // 2.12
console.log(roundNumber(1.123456789, 6)); // 1.123457

