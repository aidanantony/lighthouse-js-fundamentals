const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);
const twentyFiveisEven = isEven(25);
console.log(tenIsEven);
console.log(elevenIsEven);
console.log(twentyFiveisEven);

console.log(isEven(26));
