

// primitive Data types

const number: number = 234;// primitive types are called number,string and boolen etc (data types)

let copyNumber: number = number;
copyNumber = 888;
/* In premitive type if we are change the value of number
or string or any data type only change that value only and paticular place only */

// console.log("number", number);
// console.log("copyNumber", copyNumber);




//non - primitive Data types

interface Object { //Non premitive types are called objects ,arrays and functions (data types)
    id: number;
    name: string;
    age: number;
    insideObject?: any
} /*In non premitive type if we are change the value of inside object, array and function 
changed that value at all over object ,array and function at all objects,arrays and functions */

let object: Object = {
    id: 1,
    name: "sri",
    age: 25,
    insideObject: {
        color: "pink"
    }
};
/*shallow copy is applys no change of the 
premitive data type changes of the non premitive data types  */


let anotherObject: Object = Object.assign({}, object); //calling type 

anotherObject.age = 12;
anotherObject.insideObject.color = "red";

console.log("object", object);
console.log("anotherObject", anotherObject);// deep clone referance was canceled
/*Deep clone is applyes create a new array ,object and function there is no changes */
//let anotherObjectForDeepClone: Object = JSON.parse(JSON.stringify(object));other type of call in deep clone 
let anotherObjectForDeepClone: Object = structuredClone(object); //an other type of call in deep clone 

anotherObjectForDeepClone.age = 12;
anotherObjectForDeepClone.insideObject.color = "red";

console.log("object", object);
console.log("anotherObjectForDeepClone", anotherObjectForDeepClone);








