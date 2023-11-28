//JavaScript ES6 is the newer version of JavaScript that was introduced in 2015

//let and const

function numberOfBikes() {
    for (var i = 0; i < 6; i++) {// var key word accesable inside of the function.
        console.log(i);
    };
    console.log(i);
};
numberOfBikes();

function numberBikes() {
    for (let i = 0; i < 6; i++) {// let key word accesable inside the function block.
        console.log(i); // const key word also accessable inside the function block.
    };
};
numberOfBikes();

//Objects 

const person = {
    name: "srinu",
    walk: function () { },// walk is method of the person object.
    talk() { }
};
person.name = "hari"; // simple way of change the values of keys. this is dot notation.
person["name"] = "hari"// another way
console.log(person);

//This key word
// this key word is used to find the easy way of the find the values at many objects.
// this means the object like laptop1 and laptop2

let laptop1 = {
    cpu: "i7",
    ram: 16,
    brand: "HP",
    discreption: function () {
        console.log(this.cpu);

    }
};
let laptop2 = {
    cpu: "i9",
    ram: 8,
    brand: "Apple",
    discreption: function () {
        console.log(this.cpu);

    }
};
laptop2.discreption();

//Arrow functions
//In function lines of code is more thats why arrow function is simplified the function.
//In arrow functions return is default in function.

const greetings = () => console.log("good morning");
greetings();// this is calling in functions  

//this arrow function is in function 5 lines of code at here 3 lines 
const test = (number1, number2) => number1 + number2
let sum = test(20, 50)
console.log(sum);

//destructring 
//It means in one object keys are destructrings to equal to object
const person1 = {
    name1: "phani",
    age: 26,
    gender: "male"
};
const { name1 , age, gender } = person1;

console.log(name);

//spread 
//In this operation used to add the elemets of the one array to another array same like objects also
const arrar1=[14,15,16];
const array2=[...arrar1,17,18]
console.log(array2);

const obj1={
    name:"siva"
};
const obj2={
    ...obj1,
    age:23,
    mail:"@gmail.com"
};
console.log(obj2);


function sumarray(...theArgs:any):number { //"...theArgs "= [1,2,3];
    let total = 0;
    console.log(theArgs);

    for (const arg of theArgs) {
        total += arg;//total=total+arg

    }
    return total;
}

console.log(sumarray(1, 2, 3));
// Expected output: 6

console.log(sumarray(1, 2, 3, 4));

//classes is the buleprint of number of objects

class greetings1 {
    constructor() {// constructor is the intialize the object values or variable values in there.
        console.log("good morning");

    }
};
new greetings1();// this is the object 

class employess {
    id: number;
    emane: string;
    depNo: number;
    //initilize the veriable using constructor
    constructor(id: number, emane: string, depNo: number) {
        this.id = id;
        this.emane = emane;
        this.depNo = depNo
    }
    // initilize the veriable using method
    setData(id: number, emane: string, depNo: number): void {
        this.id = id;
        this.emane = emane;
        this.depNo = depNo
    }
    // initilize the variable using object veriable
    display(): void {//Inside class there is function is called method 
        console.log(this.id);
        console.log(this.emane);
        console.log(this.depNo);
    }
}
// let emp = new employess()// this is the object and like this object create number of objects like that
// emp.id = 1;
// emp.emane = "srinu";
// emp.depNo = 1;
// emp.setData(1, "srinu", 1)
// emp.display();

// // let emp2 = new employess()
// // emp2.id = 2;
// // emp2.emane = "hari";
// // emp2.depNo = 1;
// emp2.setData(2, "hari", 1)
// emp2.display();

let emp = new employess(1, "srinu", 1)
emp.display();
let emp2 = new employess(2, "hari", 1)
emp2.display();














