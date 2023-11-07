// Array: it is defind as a group of a elements(ex:group of numbers,strings,data types,)

const car: any[] = [{ seatCount: 12, ventilaters_seats: 2 }, "stering", 1, ["piston", { storks: 4 }]];

// Array is identified [] this symble

console.log("index 2", car[2]);
console.log("index 1", car[1]);
console.log("index 3", car[3]);
console.log("index 0", car[0]);


// methods

/*
push(),pop() ==> last index
shift(),unshift() => first index
*/

let bike: any[] = [{ frontBrake: "disc", rearBrake: "brum" }, "lock", 1, ["engine", { pistons: 4 }]];

console.log("step1", bike[0]);
console.log("step2", bike[1]);
console.log("step3", bike[2]);
console.log("step4", bike[3]);

const carModels: string[] = ["SUV", "sport", "hackbag"];

carModels.push("sedan")

console.log(carModels);

//push method
// In this method add the one element at end of the array

let bike1: any[] = ["bajaj", "hero", "honda", "tvs"]

bike1.pop()
console.log(bike1);

// pop method
// In this method remove the one element at end of the array

let bike2: any[] = ["bajaj", "hero", "honda", "tvs"]

bike2.shift()
console.log(bike2);

// shift method 
// In this method remove the one element at start of the array

let bike3: any[] = ["bajaj", "hero", "honda", "tvs"]

bike3.unshift("tvs")
console.log(bike3);

// unshift method 
// In this method add the one element at start of the array

let car1: any[] = ["lock", 1, "engine", { pistons: 4 }, [{ driverSeat: 1, passengerSeat: 2 }]];

console.log("step1", car1[0]);
console.log("step2", car1[1]);
console.log("step3", car1[2]);
console.log("step3", car1[3]);
console.log("step3", car1[4]);





