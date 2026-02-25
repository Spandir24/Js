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
/*let score2= ""    //change null with- undefined & chk the o/p for it as well.
let valueInNumber= Number(score2)    // to be used with capital 'N'
console.log(typeof valueInNumber)
console.log(valueInNumber)*/

//CONCLUSION:  for Number-  
/*                        "33" => 33
                          "33abc" => NaN
                           true => 1; false => 0
                           ""=> 0
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
/*let someNo= 33
let stringNo= String(someNo)
console.log(stringNo)
console.log(typeof stringNo)*/


// *************OPERATIONS*****************
/*let value= 3
let negvalue= -value
console.log(negvalue)*/

//BASIC OPERATIONS: 
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2*3)
// console.log(2/3)
// console.log(2%3)

//Basic: works as expected
/*let str1= "Hello"
let str2= " Sana"
let str3= str1+str2
console.log(str3)*/

//but problm comes when this happens:JST EXPLAINED: this kind of code is not considered
/*console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2) // if string first-> everything is considered a string.
console.log(1+2+"2")*/  // if string at last toh first the mathematical operation is performed then merged with string value
//CONCLUSION: use parenthesis for mathematical conversions

//Tricky conversions:not preferred:(JST READ)
// console.log(true)
// console.log(+true)
// console.log(+"")


/*let num1, num2, num3
num1= num2= num3= 2+2 */ //(more better ways to do this task)
 
/*let gameCounter= 100
// gameCounter++  //value is incremented after usage
++gameCounter     //value is incremented then used
console.log(gameCounter)*/


 
