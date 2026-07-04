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

//fuction values can be stored inside variables as well- [BEGINNER'S MISTAKE]
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
console.log(loginUserMessage(""));          //empty string- nothin prints inplace of variable
console.log(loginUserMessage());            //NO value passed=> undefined ******
*/

/*function loginUserMessage(username){
    if(username=== undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in!` //if return executes this will never run after that

}
console.log(loginUserMessage()); 
//NOTE: undefined was returned becz func returned nothing (via 'return') [And not becz the agruments was undefined]**
*/

//Another way of writing the same code:-  [! -> turns "true" to "false" and vice versa]
/*Understand concept- for if-else, 
                                we consider empty string(""), undefined and NaN as false. Now, these can never go inside the "if block" coz only true values go inside "if".
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
/*function loginUserMessage(username="Sana"){
    if(!username){                        //control will never go inisde this (becz it has a 'default' value as base case.)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in!` //if return executes, this will never run after that
}
console.log(loginUserMessage()); 
console.log(loginUserMessage("Hitesh"));   // if argument is given, it will overide the default value
*/

//-----------------------------------------------------
//shopping cart scenario- wherein we dont know how many arguments may come and we have to set our no of parameters accordingly-
//we use 'REST OPERTOR'(ie., jo mila ra h wo khula hua data h, usko bundle up krdo & give me)- ...
/*function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000));   //amounts of items in cart
*/

//Interview ques: "What goes into num1?"
/*function calculateCartPrice(val1, val2,...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000));    //respectively val1 & 2 get values, rest go in num1
*/


//A) how is an OBJECT passed and used in a function?-
//1.
/*const user={
    username:"hitesh",
//    prices: 199,     // for 1. eg
    price: 199
    
}
function handleObject(anyobject){           //a generic name is given so that we can pass any object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);  
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);    //Thus we have to be careful about whether the type being passed is an object and the required properties exist in it or not
}
//handleObject(user);         // in ARGUMENTS we pass the object 
*/


//another way of passing object in function call- (by declaring obj inside the funcion call as ARGUMENT)
//2.
/*function handleObject(anyobject){  
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);  
}
handleObject({
    username: "Sana",
    price: 399
})
//NOTE: Function declaration must be written before function call.    - "pata ni kyu likha h ye?11 smjh ni ara!"
*/


//B) how is an ARRAY passed and used in a function?-
//1. via variable name-
/*const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1];          //NOTE: we have to use the name of the parameter being used by us and not the actual array (or argument). 
                                //"inside the function, the parameter name is what matters." ***
}
console.log(returnSecondValue(myNewArray));
*/

//another way of passing array in function call- (by declaring array directly inside the funcion call as ARGUMENT)
//2.
/*function returnSecondValue(getArray){
    return getArray[1];           
}
console.log(returnSecondValue([200,400,100,600]));
*/