interface bikeType {
    model: string,
    cc?: number
    brand?: string
}


let bike1: bikeType[] = [
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

]
let count1: number = 0;
bike1.forEach((companyName, indexValue) => {// this is count of the arry elements 
    count1 += 1
    console.log(count1);

    if (companyName.model == "shine") {// this is change value of key
        companyName.cc = 135
    }
    companyName["number of pistons"] = 1;//this is add key in object
    delete companyName.brand; // delete key of the object in that time key must be optional

    if (companyName.model == "activa") {// this is add key paticular object
        companyName["speed"] = 180

    }
    if (companyName.model == "activa") {
        companyName["cubic centemeter"] = companyName["cc"]//this is replace key particular object
        delete companyName.cc
    }
})
console.log(bike1);