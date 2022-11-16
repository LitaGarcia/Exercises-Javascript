function fromBytesToFormattedSizeUnits(a, digits = 3) {
  const values = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const bytes = Math.abs(a);
  if (bytes == 0) return "0 Byte";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)));
  const result = (bytes / Math.pow(1000, i)).toPrecision(digits) + " " + values[i];
  if (a < 0) {
    return "-" + result;
  } 
  return result;
}

const result1 = fromBytesToFormattedSizeUnits(1000);
console.log(result1); // 1KB

const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2); // 123MB

const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3); // -12.145GB
