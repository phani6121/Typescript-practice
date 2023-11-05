// number methods 
// toFixed: it is defind as a number is fixed at the given number in method 
var num = "200.34567";
console.log(num + 20); // 20020
console.log(Number.parseInt(num) + 20); // 220
console.log(Number.parseFloat(num) + 20); //220.34567
console.log(Number.parseFloat((Number.parseFloat(num)).toFixed(2)) + 20); //220.34
