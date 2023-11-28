// Enums: It is the constant key word of variable value and it can create numeric and string 
var fruitPrice;
(function (fruitPrice) {
    fruitPrice[fruitPrice["applePrice"] = 0] = "applePrice";
    fruitPrice[fruitPrice["bananaPrice"] = 1] = "bananaPrice";
})(fruitPrice || (fruitPrice = {}));
var fruitOne = fruitPrice.applePrice;
var fruittwo = fruitPrice.bananaPrice;
console.log(fruitOne);
console.log(fruittwo);
// enum fruitPrice1 {
//     applePrice1 = 2, //Here item one price given 2 in this type of case its taken sequence so iten two 3
//     bananaPrice2
// }
// const fruitOne1 = fruitPrice1.applePrice1
// const fruittwo2 = fruitPrice1.bananaPrice2
// console.log(fruitOne1);
// console.log(fruittwo2);
// enum seat {
//     window = "window", // Here i am given string so its constant 
//     middle = "middle",
//     cornar = "cornar"
// }
// const window1 = seat.window
// const middle1 = seat.middle
// const cornar1 = seat.cornar
// console.log(window1);
// console.log(middle1);
// console.log(cornar1);
var num;
(function (num) {
    num[num["num"] = 0] = "num";
    num[num["nums2"] = 1] = "nums2";
})(num || (num = {}));
