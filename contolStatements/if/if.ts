let nagaraju: string = "handsome" // If, Else if and Else those three are control statements
if (nagaraju) {//At here i am using IF statement. In this statement to change the given input to output in feture
    console.log("notHandsome");
}

let myNumber: number = 34
if (myNumber > 35) {
    console.log("pass");
} else {
    console.log("fail"); 
};

let temparature: number = 19
if (temparature > 35) {
    console.log("it's a hot Day");
} else if (temparature < 35 || temparature > 20) {
    console.log("it's a normal wether");
} else if (temparature < 20) {
    console.log("it's a cold day");
}

let marks: number = 60
if (marks <= 100 && marks >= 90) {
    console.log("A");
} else if (marks <= 89 && marks >= 80) {
    console.log("B");
} else if (marks <= 79 && marks >= 70) {
    console.log("C");
} else if (marks <= 69 && marks >= 60) {
    console.log("D");
} else if (marks < 60) {
    console.log("F");
} else if (marks > 100) {
    console.log("INVALID MARKS");
};

let grades: number = 1245
if (grades <= 100 && grades >= 90) {
    console.log("A");
} else if (grades <= 89 && grades >= 80) {
    console.log("B");
} else if (grades <= 79 && grades >= 70) {
    console.log("C");
} else if (grades <= 69 && grades >= 60) {
    console.log("D");
} else if (grades < 60) {
    console.log("F");
} else if (grades > 100) {
    console.log("INVALID GRADE ");
}

let numberType: number = 5
if (numberType % 2 == 1) {
    console.log("Odd number");
} else {
    console.log("even number");
}
/*True values:
Numbers ==> -1 to -ve infinity and 1 to +ve infinity.
String ==> If array length is gretherthen 0 it considerd as true, or [].
Object ==> If object kay length is greterthen 0 it consider as true or {}.
Boolean ==> true.

falsy values:
Numbers ==> 0.
String ==> If there is no text in string that is false ex: "" or ''.
Array ==> If array length is equai to 0 it considerd as false , or [].length ==0.
Object ==> If object key length is equal to 0 it considerd as false or object.keys ({}).length==0
Boolean ==> False
Undefind , null
*/
