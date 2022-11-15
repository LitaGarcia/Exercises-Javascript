// const roundedResult = roundTo(2.123, 2);
// console.log(roundedResult); // 2.12
 
// const roundedResult = roundTo(1.123456789, 6);
// console.log(roundedResult); // 1.123457




function roundNumber (float, int) {
   const pow =  Math.pow(10,int)
   return Math.round(float * pow) / pow;
}


console.log(roundNumber(2.123, 2)); // 2.12
console.log(roundNumber(1.123456789, 6)); // 1.123457

