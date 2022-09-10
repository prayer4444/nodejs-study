'use strict';
const number = process.argv[2] || 0;
console.log(process.argv);
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum += i;
}
console.log(sum);
