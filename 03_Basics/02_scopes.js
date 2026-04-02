//'let var const' War-
/*let a=10
const b=20
var c= 30
console.log(a);
console.log(b);
console.log(c);
// The problem is ki jb 'var' works fine then why did we need the other 2? 
//ANS: becz 'var' does not facilitate block scope
*/

//NOTE: {} -> DETERMINES SCOPE

/*if(true){
    let a=10
    const b=20
    var c= 30
}
//console.log(a);         //follows scope rules thus gives error becz a variable's scope ended in the if block only
//console.log(b);        //same goes for b
console.log(c);         // this gives o/p=> wiz a problem
*/

/*let a=300
if(true){
    let a=10
    const b=20
    var c= 30
    console.log("INNER: ",a);         
}
console.log(a);
*/         

//NOTE: Global scope in "browser" and that in the "code environment" (run via node) are both different.

//--------------------------------------------------------------------------------

//Understanding nested scope- Eg: Of an icecream
/*function one(){
    const username= "hitesh"

    function two(){
        const website= "youtube"
        //to chk whether we can access-
        console.log(username)  
    }
    //console.log(website)          //gives error thus two() func call execute hi nhi hua
    two()                           // if we comment this as well the func two() wont be read for execution becz not called
}
one()
*/

//similar happens in if-else scope
/*if(true){
    const username= "hitesh"
    if(username=== "hitesh"){
        const website= " youtube"
        console.log(username+ website);
    }
    //console.log(website);           //ERROR- becz its scope was limited to inner 'if' block 
}
//console.log(username);               //ERROR- becz its scope was limited until the outer 'if' block 
*/

//INTERESTING CONCEPT +++++++++++++++++++++++  
//one way of writing function
/*function addone(num){
    return num+1
}
addone(5)

//another way of writing function wiz also sometimes called EXPRESSION- (by holding the func into a variable)
const addTwo= function(num){
    return num+2
}
addTwo(5)
*/

//Now what we do is: write func call before declaration in both cases-
// (addone(5))       //It executes w/o giving any o/p. with concole.log() it gives o/p= 6

// function addone(num){
//     return num+1
// }

addTwo(5)            //ReferenceError: Cannot access 'addTwo' before initialization=>   'HOISTING' CONCEPT
const addTwo= function(num){
    return num+2
}
