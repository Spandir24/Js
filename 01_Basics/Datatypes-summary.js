//PRIMITIVE DATATYPES:
/*const score= 100
const scoreValue= 100.3
const isLoggedIn= false
const outsideTemp= null
let userEmail= undefined     // OR can write it as- (both same):  let userEmail
*/

//usage and example of symbol:
/*onst id= Symbol('123')
const anotherId= Symbol('123')*/
// console.log(id==anotherId)

// const bigNumber = 42542362321334n


//NON-PRIMITIVE DATATYPES:
/*const heros= ["Shaktiman", "Naagraj", "Doga"]     //ARRAYS*/

//objects
/*let myObj= {
    name: "Sana",     //any datatype can be used
    age: 22
}*/

// FUNC- can be treated as varaiables here
/*const myFunction= function(){
    console.log("Hello World!")
}
*/

//HOW TO IDENTIFY DATATYPES: typeof
// console.log(typeof bigNumber)

//**************STACK & HEAP MEMORY **************
//Primitive datatype -> STACK memory: we get a copy of variable
//Non-Primitive datatype -> HEAP memory: we get refrence of the original value

//Stack explained: passed by value
/*let myYoutubename= "Sanadotcom"

let anothername= "myYoutubename"
anothername= "Chaiaurcode"

console.log(myYoutubename)
console.log(anothername)*/

//Heap explained: passed by refrence
/*let userOne= {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo= userOne
userTwo.email= "Hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)*/
