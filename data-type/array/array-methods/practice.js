var bike1 = [
    {
        model: "shine",
        cc: 125,
        brand: "honda"
    },
    {
        model: "activa",
        cc: 110,
        brand: "honda"
    },
    {
        model: "dream",
        cc: 121,
        brand: "honda"
    }
];
var count1 = 0;
bike1.forEach(function (companyName, indexValue) {
    count1 += 1;
    console.log(count1);
    if (companyName.model == "shine") { // this is change value of key
        companyName.cc = 135;
    }
    companyName["number of pistons"] = 1; //this is add key in object
    delete companyName.brand; // delete key of the object in that time key must be optional
    if (companyName.model == "activa") {
        companyName["speed"] = 180;
    }
    if (companyName.model == "activa") {
        companyName["cubic centemeter"] = companyName["cc"];
        delete companyName.cc;
    }
});
console.log(bike1);
