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
];
let result = bike.push({
    model: "dream",
    cc: 121,
    brand: "honda"
});
console.log(bike);
let result1 = bike.pop()
console.log(bike);
// map method 
// This method is create given the new array and also 
let bikeForMap: bikeType[] = [
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
];
console.log("bikeForMap", bikeForMap);
const mapDataStore = bikeForMap.map((bikeInfo: bikeType, index: number) => {
    bikeInfo.cc = 123456;
    return {
        model1: bikeInfo.model,
        cc1: bikeInfo.cc,
        brand1: bikeInfo.brand
    };
});
console.log("mapDataStore", mapDataStore);
console.log("bikeForMap", bikeForMap);
let bikeForFilter: bikeType[] = [
    {
        model: "shine",
        cc: 10,
        brand: "honda"
    },
    {
        model: "activa",
        cc: 9,
        brand: "honda"
    }
];
const mapDataStoreFroFikter = bikeForFilter.map((bikeInfo: bikeType, index: number) => {
    if (bikeInfo.cc < 10) {
        return bikeInfo.cc;
    }
}).filter((item, index) => item != undefined);
// fliter method is based on condtion to given new array
console.log("mapDataStoreFroFikter", mapDataStoreFroFikter);

// interface schoolType {
//     id: number,
//     class: string,
//     count?: number
// };
// let school: schoolType[] = [
//     {
//         id: 2,
//         class: "6th class",
//         count: 30
//     },
//     {
//         id: 1,
//         class: "7th class",
//         count: 40
//     },
//     {
//         id: 3,
//         class: "8th class",
//         count: 50
//     },
//     {
//         id: 4,
//         class: "9th class",
//         count: 60
//     },
//     {
//         id: 5,
//         class: "10th class",
//         count: 50
//     },
//     {
//         id: 6,
//         class: "11th class",
//         count: 40
//     },
//     {
//         id: 7,
//         class: "12th class",
//         count: 40
//     },
//     {
//         id: 8,
//         class: "13th class",
//         count: 30
//     },
//     {
//         id: 9,
//         class: "14th class",
//         count: 30
//     },
//     {
//         id: 10,
//         class: "15th class",
//         count: 20
//     },
//     {
//         id: 11,
//         class: "16th class",
//         count: 10
//     },
//     {
//         id: 12,
//         class: "17th class",
//         count: 20
//     },
//     {
//         id: 13,
//         class: "18th class",
//         count: 30
//     },
//     {
//         id: 14,
//         class: "19th class",
//         count: 40
//     },
//     {
//         id: 15,
//         class: "20th class",
//         count: 30
//     }
// ];
// let count: number = 0;
// school.forEach((schoolClass, indexValue) => {
//     count += indexValue;
//     console.log("schoolClass", schoolClass);
//     console.log("indexValue", indexValue);
//     console.log("inside count", count)
// });
// console.log("outside count", count);

// school.forEach(function (schoolClass, indexValue) {
//     console.log("schoolClass", schoolClass);
//     console.log("indexValue", indexValue);
// });
// school.forEach((schoolClass, indexValue) => {
//     console.log("schoolClass", schoolClass["class"]);
//     console.log("schoolClass", schoolClass.class);
//     console.log("schoolClass", schoolClass.id);
//     console.log("schoolClass", schoolClass.count);
//     console.log("indexValue", indexValue);
//     console.log(schoolClass.class);

//     if (schoolClass.id == 1) {
//         schoolClass.count = 55;
//     }
//     schoolClass["no of periods"] = 7;
//     delete schoolClass.count;
//     return schoolClass;
// });
// console.log("school", school);

// const latters1: string[] = ["a", "b", "c"];
// const latters2: string[] = ["d", "e", "f"];
// const latters3 = latters1.concat(latters2);
// console.log(latters3);

// const animals=["ant","bison",]




