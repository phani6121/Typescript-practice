// charAt
var mystring = 'welcome to typescript';
console.log(mystring.charAt(4));
var mystrings = 'welcome home';
console.log(mystring.charAt(8));
var mystring = "type script";
console.log(mystring.charAt(0));
//concat
var str1 = " welcome";
var str2 = " to siva";
var str3 = " and sri";
console.log(str1.concat(str2).concat(str3));
// replace 
var str = "flywheel";
console.log(str.replace('y', 'x'));
console.log(str.replace('fly', 'allow'));
//split : it method has to split he string multipile strings
var names = "siva naga phani";
console.log(names.split(" "));
console.log(names.split(" ", 2));
console.log(names.split(" ", 1));
//substring : it is the sparate the string of some porsition 
var strr = "sivanagaraju";
console.log(strr.substring(0, 3));
console.log(strr.substring(3, 7));
//Uppercase method: It is the change to string small letter to caital letters 
var str5 = "nidamanuri phanindar kumar";
console.log(str5.toUpperCase());
//lowercase method:It is the change to string caital letters to capital letters 
var str6 = "NIDAMANURI PHANINDRA KUMAR";
console.log(str6.toLocaleLowerCase());
// Trim method: In this method to trim the free space of right and left of the string 
var str7 = '     welcome     ';
console.log(str7.trim());
console.log(str7.trimStart());
console.log(str7.trimEnd());
