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
var fruitPrice1;
(function (fruitPrice1) {
    fruitPrice1[fruitPrice1["applePrice1"] = 2] = "applePrice1";
    fruitPrice1[fruitPrice1["bananaPrice2"] = 3] = "bananaPrice2";
})(fruitPrice1 || (fruitPrice1 = {}));
var fruitOne1 = fruitPrice1.applePrice1;
var fruittwo2 = fruitPrice1.bananaPrice2;
console.log(fruitOne1);
console.log(fruittwo2);
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
var num = 12;
var obj = {
    num: num,
    p: 3
};
console.log(obj);
