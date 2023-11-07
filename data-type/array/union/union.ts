// Union method:It is used to give 2 or more data types to the veriable 
// This method can used for two or more data values

let number: string
number = 8501830360 // showimg error because of it is string given data is number 

let userName: number | string;
userName = 2233
console.log("number_data-", userName);

userName = "phanindra"
console.log("string_data", userName);

