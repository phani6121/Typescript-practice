// charAt

var mystring: string = 'welcome to typescript';
console.log(mystring.charAt(1));

let mystrings: string = 'welcome home';
console.log(mystring.charAt(8));

var mystring: string = "type script";
console.log(mystring.charAt(0));


//concat

var str1: string = " welcome";
var str2: string = " to siva";
var str3: string = " and sri";
console.log(str1.concat(str2).concat(str3));

// replace 

var str: string = "flywheel";
console.log(str.replace('x', 'y'));
console.log(str.replace('fly', 'allow'));

//split : it method has to split he string multipile strings

var names: string = "siva naga phani";
console.log(names.split(" "));
console.log(names.split(" ", 2));
console.log(names.split(" ", 1));

//substring : it is the sparate the string of some position 

let strr: string = "sivanagaraju";
console.log(strr.substring(0, 3));
console.log(strr.substring(3, 7));

//Uppercase method: It is the change to string small letter to caital letters 

let str5: string = "nidamanuri phanindar kumar";
console.log(str5.toUpperCase());

//lowercase method:It is the change to string caital letters to capital letters 

let str6: string = "NIDAMANURI PHANINDRA KUMAR";
console.log(str6.toLocaleLowerCase());

// Trim method: In this method to trim the free space of right and left of the string 

let str7: string = '     welcome     ';
console.log(str7.trim());
console.log(str7.trimStart());
console.log(str7.trimEnd());








