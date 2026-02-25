/*let score= 33       // number

//const{score}= req.body       // to req data from front-end and store it in variable score

//both ways of writing are valid: 
console.log(typeof score)
console.log(typeof (score))*/


/*let score2= "33"    //now a string
console.log(typeof score2)

//Now suppose, we know that we have a string value and we have to perform operations on nos so we can convert it to number:
let valueInNumber= Number(score2)    // to be used with capital 'N'
console.log(typeof valueInNumber)
*/

//But who knows the entered data or input in 'score variable is definately a string only?
/*let score2= "33abc"
let valueInNumber= Number(score2)    // to be used with capital 'N'
console.log(typeof valueInNumber)
console.log(valueInNumber)           // this score2 value is actually not a number so it should not have been converted to a no datatype. Therefore it gets stored as NaN.
*/

//similarly; we try doing the same for: 'null', 'undefined', boolean value like: 'true', a string which cannot be converted to no like: "Sana" 
/*let score2= null    //change null with- undefined & chk the o/p for it as well.
let valueInNumber= Number(score2)    // to be used with capital 'N'
console.log(typeof valueInNumber)
console.log(valueInNumber)*/

//CONCLUSION:  for Number-  
/*                        "33" => 33
                          "33abc" => NaN
                           true => 1; false => 0
*/

//to convert a value from user into boolean type
/*let isLoggedIn= 1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)*/

//similarly do this for multiple values to try and find new things! :)
//     - empty String, string
/*let isLoggedIn= "Sana"
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)*/

//CONCLUSION:  for Number-  
/*                        1 => true; 0 => false
                          "" => false
                          "Sana" => true
*/

//Similarly we understand this concept for Strings
let someNo= 33
let stringNo= String(someNo)
console.log(stringNo)
console.log(typeof stringNo)