// /*object: object is a collection of properties, 
// and a property is an association between a name (or key) and a value.*/

// // Interface: It is given to mension the type of object keys 


interface bookType {
    readonly no_of_pages: number;
    chapters: number;
    subject: string;
    author?: string; // Optional is one type of option if is there data is taken and its not dummy
}

let book = {
    no_of_pages: 200,
    chapters: 10,
    subject: "english",
    author: "manu"
}

function bookInfo(book: bookType) {
    console.log();
}

bookInfo(book);

book.no_of_pages = 12;

book.chapters = 12;




interface objectType {
    objKey: number;
    objKey_2: number;

}

function object(objejData: objectType): objectType { //Here retun object is wrote at before block at index line

    const innerFunctionObject: objectType = objejData;

    return objejData

}

const onj = {
    objKey: 23,
    objKey_2: 66
}

object(onj);















const basket = {
    hooks: 10,
    color: "red",
    sub_basket: {
        hooks: 10,
        color: "red",
    },
    things: ["hooks", "pencils"]
}

let myName: string = "siva";

// const myprice: number = 1234567;

console.log(typeof basket.hooks);
console.log(typeof basket.color);
console.log(typeof basket.sub_basket);
console.log(typeof basket.things);




const prop = "ffoo";

let obj = {
    [prop]: 123,
    prop: 456
}

console.log(obj.ffoo, obj.prop);







