// primitive Data types
var number = 234;
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
// let anotherObject: Object = Object.assign({}, object);
// anotherObject.age = 12;
// anotherObject.insideObject.color = "red";
// console.log("object", object);
// console.log("anotherObject", anotherObject);
// let anotherObjectForDeepClone: Object = JSON.parse(JSON.stringify(object));
var anotherObjectForDeepClone = structuredClone(object);
anotherObjectForDeepClone.age = 12;
anotherObjectForDeepClone.insideObject.color = "red";
console.log("object", object);
console.log("anotherObjectForDeepClone", anotherObjectForDeepClone);
