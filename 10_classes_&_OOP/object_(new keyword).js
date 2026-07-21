//GOAL: to understand 'new' keyword

function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype); // this prototype not only stores methods but also contains and gives some internal prpts and 'this' context

function createUser(username, score) {
  // username = username;     // this creates confusion in understanding thus instead of this we write as below
  ((this.username = username), (this.score = score));
}

// since func is an obj and obj holds inherited prpts and methods of object (by default), so can we add/ declare our func as a prprty into the func?        YES!
createUser.prototype.increment = function () {
  this.score++; // jisne(mtlb 'this') bhi bulaya h createUser ko uske score ki value increase hogi
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`); // jisne bhi bulaya h createUser ko uske score ki value increase hogi
};

const chai = new createUser("Chai", 25);
const tea = new createUser("Tea", 250);
// But the above 2 statements still give this error: 'Cannot read properties of undefined' becz we did not tell these newly created obj [chai and tea] abt those additional prpts added by us into the func (they r being made from).
// This task is done by 'new' KEYWORD!!

chai.printMe();
// NOTE: If these new func: increment and printMe wld have been given inisde createUser as functions then, thwy wld hv run w/o the need of 'new' keyword

//NOTES:
/*

Here's what happens behind the scenes when the new keyword is used:

1) A new object is created: The new keyword initiates the creation of a new JavaScript object [wiz not Chai/ tea initailly- rather an empty obj is created internally; later on when everything completes, that data of the new obj is added into chai/tea], [that new obj is passed a reference (constructor func) so that the empty obj can contain all its prpts & prototype]

2) A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

3) The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
