var _a;
;
var ExampleObj = {
    id: 1,
    name: "sriman",
    age: 25,
    sur_name: "adaka",
    nested_obj: {
        bike: "jawa",
        color: "grya"
    }
};
for (var key in ExampleObj) {
    console.log("key", key);
    console.log("ExampleObj[key]", ExampleObj[key]);
    if (key == "nested_obj")
        for (var nested_key in ExampleObj[key]) {
            console.log("nested_key", nested_key);
        }
}
var keyName = "abcd";
var obj = (_a = {},
    _a[keyName] = 123,
    _a.keyName = 345,
    _a);
console.log(obj.abcd, obj.keyName);
/*
assign
entries
hasOwn
is
Sealed
Seal
keys
values*/
//assign method
/*In this method one or more objects are there in that time if we call first object it will
add remining objects and if objects keys are same the value takenend of the object

If we call second or third object output is only that object keys and values */
var car = {
    pistons: 4,
    cylinders: 4,
    insideObject: {
        "model": 2021
    }
};
var bike = { wheels: 2, strokes: 4 };
var auto = { wheels: 3, passengers: 8 };
var result = Object.assign(car, bike, auto);
car.insideObject.model = 2022;
console.log(bike);
console.log(car);
console.log(auto);
//Deep clone 
var obj1 = { a: 1, b: 2 };
var obj2 = structuredClone(obj1);
obj1.a = 5;
obj1.b = 6;
console.log(obj2);
//Entries method 
// In this method output is formed array of the kays and values
var school = { a: 200, b: 500 };
console.log(Object.entries(school));
var school1 = { 500: "a", 300: "b" }; // At here kays are numbers so output is formed in Ascending order
console.log(Object.entries(school1));
//hasown method 
// In this method if we are object of keys are call is given true if we are call keys not in that object 
// output is false 
var car1 = {
    wheels: 4,
    steering: 1,
    driver: 1
};
console.log(Object.hasOwn(car1, "wheels")); //This is object key so true 
console.log(Object.hasOwn(car1, "tyres")); // This is not object key so false(not defind)
//is method 
// In this method object keys values are same output is true values are different output false
console.log(Object.is(1, -1)); // both values are different so false 
var car2 = { wheels: 4 };
var car3 = { cylinders: 4 };
var car4 = car2;
console.log(Object.is(car2, car4)); // both values are same so true 
console.log(Object.is(car3, car2)); // both values are different so false
//keys method
//In this method object of keys formed array to output
var honda = {
    model: "shine",
    cc: 125,
    manfacture: 2022
};
console.log(Object.keys(honda));
var anObj = { 300: "silver", 200: "gold", 500: "platinum" }; // keys formed in order
console.log(Object.keys(anObj));
//values method 
//In this method object values are formed array
var jeep = {
    model: "compass",
    cc: 2000,
    yearOfModel: 2022
};
console.log(Object.values(jeep));
var materials = {
    gold: 5000,
    silver: 2000,
    platinum: 8000,
    bronze: {
        quality1: 500,
        quality2: 400
    }
};
console.log(Object.values(materials));
;
var animals = {
    dog: 3,
    duck: 5,
    picock: 2
};
Object.seal(animals);
animals.duck = 1;
console.log(animals);
delete animals.dog;
console.log(animals);
//sealed method 
// In this method object is sealed output true ,not sealed output false
var viscocity = {
    property: 42,
};
console.log(Object.isSealed(viscocity));
Object.seal(viscocity);
console.log(Object.isSealed(viscocity));
