// While loop --> It is also work like for loop.
let milk: number = 1;//milk value is initial value 
let milkValue: number = 15;
while (milk <= 30) {//milk<=30 it is condition for while loop
    console.log(milk);
    console.log((`day-->${milk}`));
    milk += 1;//increment of initialvalue
}
console.log(milkValue);

let studentStart = 1;
let price = 0;
while (studentStart <= 40) {
    if (studentStart % 2 == 0) {
        price = price + 20000;
    } else {
        price = price + 40000
    }
    studentStart += 1;
}
console.log(price);


