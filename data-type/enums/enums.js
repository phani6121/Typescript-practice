// Enums: It is the constant variable value and it can create numeric and string 
// enum fruitPrice {
//     applePrice,   //Here item one price taken 0 and item two price 1
//     bananaPrice
// }
// const fruitOne = fruitPrice.applePrice;
// const fruittwo = fruitPrice.bananaPrice;
// console.log(fruitOne);
// console.log(fruittwo);
// enum fruitPrice1 {
//     applePrice1 = 2, //Here item one price given 2 in this type of case its taken sequence so iten two 3
//     bananaPrice2
// }
// const fruitOne1 = fruitPrice1.applePrice1
// const fruittwo2 = fruitPrice1.bananaPrice2
// console.log(fruitOne1);
// console.log(fruittwo2);
var seat;
(function (seat) {
    seat["window"] = "window";
    seat["middle"] = "middle";
    seat["cornar"] = "cornar";
})(seat || (seat = {}));
var window1 = seat.window;
var middle1 = seat.middle;
var cornar1 = seat.cornar;
console.log(window1);
console.log(middle1);
console.log(cornar1);
