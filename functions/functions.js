//function : it is used to create a logic with the help of that logic we can perform paticular task many times 
function nameOfFunction() {
    //function body
}
//nameOfFunction()                   // function calling 
function multi(a, b) {
    console.log(a * b);
}
multi(2, 4); // 2 and 4 both are arguments 
multi(20, 30);
function addition(a, b, c) {
    console.log(c);
    console.log(a + b + c);
}
;
addition(2, 3, 4);
// addition(1,0)
function additionWithThree(a, b, c) {
    if (a === void 0) { a = 2; }
    if (b === void 0) { b = 3; }
    if (c === void 0) { c = 2; }
    console.log(c);
    console.log(a + b + c);
    console.log(a + b + c + substraction());
}
;
additionWithThree();
// function with return 
function substraction(x, y) {
    if (x === void 0) { x = 7; }
    if (y === void 0) { y = 5; }
    return x - y;
}
var count = 0;
function valueIncrement(value) {
    var count = value;
    for (var index = 0; index < 10; index++) {
        count = count + 1;
    }
    function innerFunctio(value) {
        // count = value;
        for (var index = 0; index < 10; index++) {
            count = count + 1;
        }
        return count;
    }
    return innerFunctio(count);
}
console.log("function return count", valueIncrement(0));
console.log("outside count", count);
