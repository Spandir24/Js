//BASIC COMPARISONS- (A)work normally as maths:(jst read- nothing to understand)
// console.log(2>1)        // ans: Boolean values
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)
//(B) works normally for strings too


//prblm occurs when we compare dissimilar datatypes:
/*console.log("2">1)   //automatically 2 got converted to no
console.log("02">1)*/
/*Here we got predictable ans but sometimes we dont. 
CONCLUSION:'Always compare similar datatypes only'- Typescript doesn't alllow dissimilar comparisons*/

//this example [with null] below explains the same:
/*console.log(null>0)
console.log(null==0)
console.log(null>=0)*/
/*Reason is: equality chk (==) and comparisons(>, <, >=, <=) work differently. 
Comparisons- convert null to a no, treating it as 0. That's why null>=0 : true & null>0 : false
*/


//this example[with undefined] below explains the same:
/*console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)*/

//Strict check ie., === : checks values+ datatypes as well
console.log("2"==2)   //true
console.log("2"===2)


//THEREFORE, WE IGNORE SUCH COMPARISONS!!