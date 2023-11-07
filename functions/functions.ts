//function : it is used to create a logic with the help of that logic we can perform paticular task many times 

function nameOfFunction() {
    //function body or block 
}

//nameOfFunction()                   // function calling 


function multi(a: number, b: number) { // a and b both are parameters
    console.log(a * b)
}

multi(2, 4); // 2 and 4 both are arguments 

multi(20, 30);

function addition(a: number, b: number, c: number) {
    console.log(c);
    console.log(a + b + c);
};
addition(2, 3, 4)

// addition(1,0)


function additionWithThree(a: number = 2, b: number = 3, c: string = "two") { // defolt perameter value 
    console.log(c);
    console.log(a + b + c);
    console.log(a + b + c + substraction());
};
additionWithThree()

// function with return 

function substraction(x: number = 7, y: number = 5) {
    const result:number = x - y;
    return result;
}


let count: number = 0;

function valueIncrement(value: number) {
    let count: number = value;
    for (let index = 0; index < 10; index++) {
        count = count + 1;
    }

    function innerFunctio(value: number) {
        // count = value;
        for (let index = 0; index < 10; index++) {
            count = count + 1;
        }

        return count;
    }

    return innerFunctio(count);
}

console.log("function return count", valueIncrement(0));
console.log("outside count", count);