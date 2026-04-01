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
    //console.log(website)          //gives error thus two() func call doesn't run
    two()                           // if we comment this as well the func two() wont be read for execution becz not called
}
one()
*/

