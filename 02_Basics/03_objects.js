//declaration- 2 ways:   1. like a literal- const JsUser={}
//                       2. like a constructor(via .create)- Object.create

//via other ways(like via LITERAL) a singleton obj is not created.
//WHEREAS, When an obj is created from a CONSTRUCTOR, a singleton obj is formed.
//**********************

 
//Oject literals-
//a) DECLARATION
const mySym= Symbol("key1")

const JsUser= { 
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // mySym1: "mykey1",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//b) ACCESS- 2 ways:
/*console.log(JsUser.email);
console.log(JsUser["email"]);
*/

//we must know both the above ways becz incase we have a value in object as "full name", we won't be able to access that element via (.) method:
//console.log(JsUser.full name);            //INVALID 
//console.log(JsUser["full name"]);

/*console.log(JsUser.mySym);
console.log(JsUser["mySym"]);             // Both ways it can be accessed
console.log(typeof(JsUser.mySym));  */   //But it is not being used as  a 'Symbol'. So to use it as a Symbol we need to write the key in [].
//console.log(JsUser[mySym])              // It can only be accessed this way.

//c) MODIFY VALUE OF OBJ-
JsUser.email= "hitesh@chatgpt.com"       //this way we can override elements.
console.log(JsUser);

Object.freeze(JsUser)             // becz we freezed the Obj,the below modified elements in the obj could not propagate further.
JsUser.email= "hitesh@microsoft.com"
console.log(JsUser);
