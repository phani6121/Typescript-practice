// primitive Data types
var number = 234; // primitive types are called number,string and boolen etc (data types)
var copyNumber = number;
copyNumber = 888;
var object = {
    id: 1,
    name: "sri",
    age: 25,
    insideObject: {
        color: "pink"
    }
};
/*shallow copy is applys no change of the
premitive data type changes of the non premitive data types  */
var anotherObject = Object.assign({}, object); //calling type 
anotherObject.age = 12;
anotherObject.insideObject.color = "red";
console.log("object", object);
console.log("anotherObject", anotherObject);
/*Deep clone is applyes create a new array ,object and function there is no changes */
//let anotherObjectForDeepClone: Object = JSON.parse(JSON.stringify(object));other type of call in deep clone 
var anotherObjectForDeepClone = structuredClone(object); //an other type of call in deep clone 
anotherObjectForDeepClone.age = 12;
anotherObjectForDeepClone.insideObject.color = "red";
console.log("object", object);
console.log("anotherObjectForDeepClone", anotherObjectForDeepClone);
