//1) 'object' hi 'object literal' h:

/*const user = {
  username: "Sana", // these are prpts
  loginCount: 8,
  signedIn: true,

  // since object literals are similar to objects they can be referred to as a collection of prpts & methods
  getUserDeatils: function () {
    // this is a method
    // console.log("Got user details from DB");
    // console.log(`Username: ${this.username}`);   // "Bahar se jab samman lena h toh func ke execution context(EC) ko btaana pdta h ki mn apne samman ki baat kr ra hu which is referred to by 'this' "

    console.log(this);     // in functional context
  },
};

console.log(user.username);
// console.log(user.getUserDeatils());

console.log(this);        // in global context
*/

//2) Constructor function:
function User(username, loginCount, isLoggedIn){
  ((this.username = username), // means: "Put the value "John" inside the new object's username property."
    // LHS value is our variableName [the property being assigned] wiz used to refer to RHS value

    (this.loginCount = loginCount),
    (this.isLoggedIn = isLoggedIn));


  this.greeting= function(){
    console.log(`Welcome ${this.username}`);     //means: Get the username property from the object that is calling greeting.
  }


  return this; // returns the current object that this refers to
  //when using new, you generally don't need to write 'return this' because JavaScript automatically returns the newly created object.
}

const userOne= new User("Hitesh", 12, true)
const userTwo=  new User("ChaiAurCode", 11, false)        // this overwrites the above values given by userOne
// Thus we req 'Constructor func' becz it gives a new instance/ copy to us for making changes which don't change the original

// console.log(userOne);
// console.log(userTwo);

// console.log(userOne.constructor); 
//So, constructor prpty is a reference abt oneself 


//instanceof operator
/*console.log(userOne instanceof User);        // becz: const userOne = new User(...)   => created userOne using the User constructor.

console.log(userOne instanceof Object);     // Because every normal object in JavaScript ultimately inherits from Object.prototype.
*/