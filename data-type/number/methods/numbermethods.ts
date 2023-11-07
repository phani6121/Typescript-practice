// number methods 

let num: string = "200.34567";

console.log(num + 20); // 20020

//In this function output given to string 

console.log(Number.parseInt(num) + 20); // 220

//In this function only taken only before point number only consider 

console.log(Number.parseFloat(num) + 20); //220.34567

//In this function also taken after points also consider 

const toFixedValue: string = Number.parseFloat(num).toFixed(2);

//In this function given out put given in string after neet to change to number 

/*In this function given to some fixed number 
given to consider after point only out put given only taken that two numbers */


console.log(Number.parseFloat(toFixedValue) + 20); //220.34

let amount: string='123.345';
console.log(amount+20);



