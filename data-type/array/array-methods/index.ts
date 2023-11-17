interface SchoolType {
    id: number,
    class: string,
    count?: number // ? it means when we call the object if value is there. i
}

let school: SchoolType[] = [
    {
        id: 2,
        class: "6th Class",
        count: 200
    },
    {
        id: 1,
        class: "7th Class",
        count: 100
    },
    {
        id: 3,
        class: "t8h Class",
        count: 20
    },
    {
        id: 4,
        class: "9th Class",
        count: 2000
    },
    {
        id: 5,
        class: "10th Class",
        count: 10
    }
]

let count: number = 0;
school.forEach((schoolClass, indexValue) => {// In foreach method first veriable is mention to object
    count += indexValue;                      // second veriable mention to index value 
    // console.log("schoolClass", schoolClass)//and in foreach method no need to mention same veriable of index
    // console.log("indexValue", indexValue);
    console.log("inside count", count);
})
console.log("outside count", count);


school.forEach(function (schoolClass, indexValue) { //forEach method has by defolt two variables is there
    console.log("schoolClass", schoolClass);
    console.log("indexValue", indexValue);
})

school.forEach((schoolClass, indexValue) => {
    console.log("schoolClass", schoolClass["class"]);
    console.log("schoolClass", schoolClass.class);
    console.log("schoolClass", schoolClass.id);
    console.log("schoolClass", schoolClass.count);
    console.log("indexValue", indexValue);
    console.log(schoolClass.class);

    if (schoolClass.id == 1) {
        schoolClass.count = 55;
    }

    schoolClass["no_of_periods"] = 7;
    delete schoolClass.count;
    // schoolClass.no_of_periods = 7;


    return schoolClass;

})

console.log("school", school);





// methods

// Array.prototype.at()

// Array.prototype.concat()

// Array.prototype.map()

// Array.prototype.sort()

// Array.prototype.slice()

//concat method

const latters1: string[] = ['a', 'b', 'c'];
const latters2: string[] = ['d', 'e', 'f'];
const latters3 = latters1.concat(latters2);

console.log(latters3);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

console.log(animals.slice(2, 4));

console.log(animals.slice(1, 5));

console.log(animals.slice(-2));

console.log(animals.slice(2, -1));

console.log(animals.slice());

// sort method


const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const compareNumbers: number[] = [12, 25, 2, 45, 17, 1]

function helper(__1, __3) {
    return __1 - __3
}
console.log(compareNumbers.sort(helper));

// map method

let numbers = [2, 4, 6, 8, 10];

function square(number) {
    return number * number;
}

let square_numbers = numbers.map(square);
console.log(square_numbers);

// At method 

const array1 = [5, 12, 8, 130, 44];

// console.log(array1.at(3));


interface bikeType {
    model: string,
    cc: number
    brand: string
}
let bike: bikeType[] = [
    {
        model: "shine",
        cc: 125,
        brand: "honda"
    },
    {
        model: "activa",
        cc: 110,
        brand: "honda"
    }
]
let result = bike.push({
    model: "dream",
    cc: 121,
    brand: "honda"
})
console.log(bike);



