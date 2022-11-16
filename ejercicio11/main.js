function splitArrayIntoChunks(a, b) {
    let subSubArray = [];
  for (let i = 0; i <= a.length ; i+=b) {
    const subArray = a.slice(i, i +b);
    subSubArray.push(subArray);
  }
  return subSubArray;
}

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]