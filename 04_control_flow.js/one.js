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

//block scope explained:
const score= 200
if(score>100) {
    let power= "fly";
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);