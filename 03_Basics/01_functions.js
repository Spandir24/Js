//func declaration
/*function sayMyName(){         //PARAMETERS
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//function reference
sayMyName();                 //ARGUMENTS
*/

//function to add 2 nos-
/*function addTwoNumbers(number1,number2){    
    console.log(number1+number2);
}
addTwoNumbers();            //return NaN- becz no argument was passed
addTwoNumbers(3,4);
//what if the input 4 was given as "4"-
addTwoNumbers(3,"4");      //JS converted itself but this might create problems if we dont check dtypes and operation being performed on them

//fuction values can be stored inside variables as well-
const result= addTwoNumbers(3,5);
console.log("Result: ", result);    //concept: thus it is imp to note ki func se humne wapis kya bheja jo result mn store hua (explained below)
//console print krne ka mtlb ye nhi ki function wo value return bhi kr ra h. Return is a diff concept while console.log only prints on screen.
*/

//ways to return a value from a function-
//1. (via storing ans in a variable)
/*function addTwoNumbers(number1,number2){    
    let result= number1+ number2;
    return result;
    //console.log("Hitesh");   //this will NEVER EXECUTE- becz after 'return' no statement is run/executed, it simply "sends a value back to the place where the function was called.""
    
}
const result= addTwoNumbers(3,5);
console.log("Result: ", result); 

//NOTE:- result has been declared twice here- both are diff becz both declared in diff scopes 
*/

//2. (directly returning the value)
/*function addTwoNumbers(number1,number2){    
    return number1+ number2;
}
const result= addTwoNumbers(3,5);
console.log("Result: ", result); 
*/

//More about argument & parameters-
//A user logs in we have to show a message: 
/*function loginUserMessage(username){
    return `${username} just logged in!`

}
console.log(loginUserMessage("Hitesh"));    //ARGUMENT passed
console.log(loginUserMessage(""));          //empty string
console.log(loginUserMessage());            //NO value passed=> undefined
*/

/*function loginUserMessage(username){
    if(username=== undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in!` //if return executes this will never run after that

}
console.log(loginUserMessage()); 
//NOTE: undefined was returned becz func returned nothing (via 'return') [And not becz the agruments was undefined]
*/

//Another way of writing the same code:-  [! -> turns "true" to "false" and vice versa]
/*Understand concept- for if-else, we consider empty string("") and undefined as false. Now, these can never go inside the "if block" coz only true values go inside "if".
Thus we write in this way written below:
*/
/*function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in!` //if return executes this will never run after that
}
console.log(loginUserMessage()); 
*/

//to avoid such 'undefined' cases we can pass default values in- func declaration:-
function loginUserMessage(username="Sana"){
    if(!username){                        //control will never go inisde this (becz it as a 'default' value as base case.)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in!` //if return executes this will never run after that
}
console.log(loginUserMessage()); 
console.log(loginUserMessage("Hitesh"));   // argument will overide the default value