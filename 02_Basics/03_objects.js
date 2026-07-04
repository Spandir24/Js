//declaration- 2 ways:   1. like a literal, Eg:- const JsUser={}
//                       2. like a constructor(via .create)- Object.create

//THE ONLY DIFF BTW THE ABOVE TWO IS OF SINGLETON & NON-SINGLETON:
//WHEREAS, When an obj is created from a CONSTRUCTOR, a 'singleton' obj is formed alwys.
//WHEREAS, via other ways(like via LITERAL) a singleton obj is not created- its multiple instances are formed.
//**********************

 
//1.Object literals-
//a) DECLARATION
const mySym= Symbol("key1")       //defining a symbol: string "key1" is jst a description

const JsUser= { 
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // mySym1: "mykey1",
    [mySym]: "mykey1",           // writing a symbol as key of an object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


//b) ACCESS- 2 ways:
/*console.log(JsUser.email);                  //preferred
console.log(JsUser["email"]);
*/

//we must know both the above ways becz incase we have a value in object as- "full name", we won't be able to access that element via (.) method:
//console.log(JsUser.full name);            //INVALID 
//console.log(JsUser["full name"]);        //Thus we can only write it this way

/*console.log(JsUser.mySym);
console.log(JsUser["mySym"]);             // Both ways it can be accessed
console.log(typeof(JsUser.mySym));  */   //But it is not being used as  a 'Symbol' by jst writing:- mySym: "mykey1". So to use it as a Symbol we need to write the Symbol key in [].
//console.log(JsUser[mySym])              // Also, a symbol can only be accessed this way.

//c) MODIFY VALUE OF OBJ-
/*JsUser.email= "hitesh@chatgpt.com"       //this way we can override elements.
console.log(JsUser);

Object.freeze(JsUser)             // becz we freezed the Obj,the below modified elements in the obj could not propagate further.
JsUser.email= "hitesh@microsoft.com"
console.log(JsUser);
*/

//FUNCTIONS- (adding functions in objects:)
/*JsUser.greeting= function(){
    console.log("Hello JS user");
}
//console.log(JsUser.greeting);       // [Function (anonymous)] :- means "func execute nhi hua h sirf uska refrence ayaa h bs" *******
//console.log(JsUser.greeting());    //   Hello JS user
                                    //    undefined

JsUser.greetingTwo= function(){
    console.log(`Hello JS user, ${this.name}`);         // 'this.' keyword is used to reference the same obj- it provides us a list of all prpts inside it.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
*/

//NOTE: More about this will be explained ahead.
