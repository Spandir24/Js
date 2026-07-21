//GOAL: 1)to understand prototype

// A) (done at the end)
/*let myName= 'hitesh     '
console.log(myName.length);      //this gives incorrect result becz of spaces 
//Hence i wish to build my own func so that it returns only the actual length of the string
*/


/*let myHeros= ["thor", "spiderman"]


let heroPower= {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// Now we wish to inject a func into HeroPower obj but not directly into DS but into Object- (so that it becomes accessible to all DS(array and obj, here) in the JS script) 
Object.prototype.hitesh= function(){
    console.log(`Hitesh is present in all objects`);
}

// heroPower.hitesh();
// myHeros.hitesh();                 


// Now, what if we inject a func on a particular DS, then will it be automatically available for 'Object prototype'?
Array.prototype.heyHitesh= function(){
    console.log(`Hitesh says hello`);   
}
//V. IMP: "Constructor functions/classes have a .prototype property. Instances usually do not"  => Thus 'Array.' was used instead of 'myHeros.prototype'

myHeros.heyHitesh()
// heroPower.heyHitesh()
*/


//GOAL: 2)to understand inheritance

/*const User= {
    name: "chai",
    email: "chai@google.com"
}

const Teacher= {
    makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
};

const TASupport = {
  makeAssignment: 'Js assignment',
  fullTime: true,
  __proto__: TeachingSupport        // OUTDATED APPROACH     // this can also be done in global context (as below)
};

Teacher.__proto__=  User            // means: Teacher can access all prpts of User

// MODERN SYNTAX for the above:
Object.setPrototypeOf(TeachingSupport, Teacher)      // means: TeachingSupport can access all prpts of Teacher obj
*/



// continuing with the 1st concept/ task:
/*let anotherUsername= " ChaiAurCode     "
String.prototype.trueLength= function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()

"hitesh".trueLength();                    //explained more abt 'this' with these 2 examples
"iceTea".trueLength() 
*/
