// /*object: object is a collection of properties, 
// and a property is an association between a name (or key) and a value.*/
var book = {
    no_of_pages: 200,
    chapters: 10,
    subject: "english",
    author: "manu"
};
function bookInfo(book) {
    // console.log();
}
bookInfo(book);
book.no_of_pages = 12;
book.chapters = 12;
function object(objejData) {
    var innerFunctionObject = objejData;
    return innerFunctionObject;
}
var obj = {
    objKey: 1,
    objKey_2: 2
};
object(obj);
var basket = {
    hooks: 10,
    color: "red",
    sub_basket: {
        hooks: 10,
        color: "red",
    },
    things: ["hooks", "pencils"]
};
var myName = "siva";
// const myprice: number = 1234567;
console.log(typeof basket.hooks);
console.log(typeof basket.color);
console.log(typeof basket.sub_basket);
console.log(typeof basket.things);
