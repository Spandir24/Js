function SetUsername(username){
    //complex DB calls
    this.username= username,
    console.log("CALLED");
    
}

function createUser(username, email, password){
    // SetUsername(username), // func call lg  ra h to the above func, but as soon as it executes, it gets removed from the 'CALL STACK', thus all data & variables of the nested func are lost.

    //Thus, to be able to explicitly call another func from inside a func & hold the nested func's data, we use some methods (one is given as below):
    SetUsername.call(this, username),
    this.email= email,
    this.password= password
}

const chai= new createUser("chai", "chai@fb.com", "123")
console.log(chai);



/* UNDERSTANDING THE CONCEPT:

STEP 1: Normal function call
function SetUsername(username) {
    this.username = username;
}
function createUser(username, email, password) {
    SetUsername(username);

    this.email = email;
    this.password = password;
}
const chai = new createUser("chai", "chai@fb.com", "123");

When you write:     new createUser(...)

JavaScript creates a new object approximately like this:            const newObject = {};

Then inside createUser, this points to that new object:            this === newObject;

So:

this.email = email;    becomes=>     newObject.email = "chai@fb.com";

So far:

{
    email: "chai@fb.com",
    password: "123"
}

=====================*

STEP 2: What happens with this?
SetUsername(username);

This means:  "Call SetUsername normally."

Inside SetUsername:       this.username = username;

But the question is:     Which object does this refer to inside SetUsername?

It is not automatically the same this as in createUser.

A normal function call:   SetUsername(username);
doesn't say:

"Use the this from createUser."

It simply calls the function.

Therefore, the this inside SetUsername may be:     'undefined' in strict mode, or the global (ie., window obj) object in non-strict mode.


So your new chai object may not get:    username: "chai"

That is the problem.

=====================*

STEP 3: You try this-

.call() works like this:     function.call(thisValue, argument1, argument2, ...)
The first argument is always the value of this.

[
SetUsername.call(username);

means:   Call SetUsername and make its 'this' equal to "chai".

It is equivalent to:   SetUsername.call("chai");

Now inside SetUsername:  this.username = username;

becomes conceptually:   "chai".username = undefined;

Why is username inside SetUsername undefined?   Because you did not pass the function's actual username parameter.

You only passed the value as this.
]

=====================*

STEP 4: Correct version-   SetUsername.call(this, username);

means:
| Position     |  Value         |      Meaning 
======================================================================================
1st argument     `this`           What should `this` inside `SetUsername` refer to?   
2nd argument     `username`       What value should the `username` parameter receive? 


So imagine:

this = chaiObject
username = "chai"

Then:

SetUsername.call(this, username);

means:   Run SetUsername, but make its this point to chaiObject, and give "chai" to its username parameter.

Inside:

function SetUsername(username) {
    this.username = username;
}

JavaScript effectively performs:   chaiObject.username = "chai";

Now the final object is:

{
    username: "chai",
    email: "chai@fb.com",
    password: "123"
}



.call() ka use kisi function ko immediately execute karne ke liye hota hai, while manually deciding what this should refer to. => "used to pass current EC to another func"



*/