const user= {
    username: "Sana",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website!`);
        // console.log(this);       // Therefore, when 'this' is called as an obj-method it refers to the 'current context of object' on which it is being called.
    }
}
// user.welcomeMessage()
// user.username= "Sam"     // we changed the context here. 
// user.welcomeMessage()

//console.log(this);         // {} => o/p in node environment but, the o/p is 'Window obj' in browsers(NON- STRICT MODE).

// 'this' written inside a function- [2 ways done becz there are 2 ways of writing func.]
// 1. Way1-
/*function chai(){
    //console.log(this);     // gives a lot many values- only rem this

    let username= "Sana";
    console.log(this.username);         // here the result confirms us that 'this' does not work the same way as it does in objects
}
chai()
*/

// 2. Way2-
/*const chai= function(){
    let username= "Sana";
    console.log(this.username);         // here also the result confirm us that 'this' does not work the same way as it does in objects
}
chai()
*/


//Making an arrow func:
/*const chai= () => {
    console.log(this);

    let username= "Sana";
    console.log(this.username);           // (even if we write this arrow function inside an obj we get sam reults as this (eg given at last)).Therefore, consistency of o/p (as above)is maintained in arrow func as well. 
}
chai()
*/

//Studying arrow function
//Basic syntax:-  () => {}

//We can hold this arrow func inside a variable name:
/*const addTwo= (num1, num2) => {
    return num1+ num2;                    // called EXPLICIT RETURN
}
console.log(addTwo(3,4))
*/

//Also, there is a concept of 'IMPLICIT RETURN' in arrow func which says: Because the function body consists of a single expression-
//the arrow function automatically returns the result of its expression, (without using the return keyword) when the function body has 'no curly braces'. 
/*const addTwo= (num1, num2) => num1+ num2;
console.log(addTwo(3,4))

//Rules to remember:
//                   Without braces {} → implicit return
//                   With braces {} → you must use return

// another simplified way of writing the above code to avoid confusion is: WRAP THE EXP also in ()
const addTwo= (num1, num2) => (num1+ num2);
console.log(addTwo(3,4))
*/

//Now what if we wanted to return an obj
const name= () => ({username: "Sana"});      // we need to write the obj in ()
//console.log(name())

//Writing func inside loops- jst read eg:
//1.
/*myArray.forEach(function() {})    //normal func syntax
*/

//2.
/*myArray.forEach( () => {} )      //arrow func
*/

//3.
/*myArray.forEach( () => () )      //arrow func- () wala syntax
*/

// ---------------*
//extra gpt code for understanding:
const obj = {
    name: "Sana",

    normal: function() {
        console.log(this),        
        console.log(this.name);   // Sana
    },

    arrow: () => {
        console.log(this),
        console.log(this.name);   // undefined
    }
};

// console.log(obj.normal())
// console.log("--------------------------------------------")
// console.log(obj.arrow())        //Each time undefined is coming at last becz: In JavaScript, if a function doesn't explicitly return anything, it automatically returns: undefined

//If you don't want that extra undefined, simply do(below): without wrapping them in console.log().

obj.normal();
console.log("--------------------------------");
obj.arrow();

