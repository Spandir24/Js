//(I) if:
/*if(condition= true){
    //code
}
*/

//eg of condition & its evaluations: 
//1.
/*const isuserloggedIn= true
if(isuserloggedIn) => true
*/

//2.
/*if(3!=2) => true*/

//COMPARISON OPERATORS: <, >, <=, >=, ==, !=, !==, ===

// (II) if-else: if the 'if condition' is true => 'if block executes' otherwise 'else' does.
/*const temperature= 41
if (temperature ===40){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}
console.log("Executed!");
*/

//block scope explained: (wrt let & var)
/*const score= 200
if(score>100) {
    let power= "fly";
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);
*/

//shorthand notation:  (not recommended )
const balance= 1000;
//if(balance>500) console.log("test");             // called 'Implicit scope'- means if statement controls only the next statement, which is referred to as its block incase {} are not used. 
// NOTE: but the next line will come under global scope only (when w/o {}). To write multiple lines incase of implicit scope method- use , btw statements

//(I)to chk multiple cond: [but only 1 out of all executes; rest are skipped] [used: when you're checking different conditions (comparisons, ranges, logical expressions).]
/*if(balance< 500){
    console.log("less than 500");
}
else if(balance<750){
    console.log("less than 750");
}
else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}
*/

//real life usage of multiple cond:
const userloggedIn= true 
const debitCard= true
const loggedInFromGoogle= false
const loggedInFromEmail= true

if(userloggedIn && debitCard){                          // and- both T
    console.log("Allow to buy course.")
}

if(loggedInFromGoogle || loggedInFromEmail){           // or- any 1 T
    console.log("User logged in.")
}