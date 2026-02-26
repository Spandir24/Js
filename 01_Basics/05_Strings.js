//I way of declaring string: 
/*const name= "Sana"    //bts this also imports object- String
const repoCount= 4

//console.log(name+ repoCount+" value")  //This syntax of writing strings is not preferred now. 

//Thus we write as follows via- String Interpolation: variable is injected by: ${}
console.log(`Hello my name i ${name} and my repo count is ${repoCount}`)
//we can also perform operations on srtings on the go: 
console.log(`Hello my name i ${name.toUpperCase()} and my repo count is ${repoCount}`)
*/

//II way of declaring string: 
const gameName= new String ('hitesh-hc-com')   //String-> object ie has the form of key: value pair 

/*console.log(gameName[0])               //accessing its keys
console.log(gameName.__proto__)       //accessing its protoype- here we get an empty obj but when we do this on console it shows prototype methods.
// Also, to access those prototype methods we can simply write variableName.methodname(). for eg:
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))          //to find 'what char' is present at an index- SYNTAX:  .charAt(index)

console.log(gameName.indexOf('t'))  */       //to find a char is at 'which position'- SYNTAX:  .indexOf('char')


//slicing a string- will req start and end no- end not incl.
/*const subString= gameName.substring(0,4)   //it does not take -ve values,it converts them to 0 as: Any negative value becomes 0 AND If start > end, it swaps them
console.log(subString)

//slice(): does not modify the original string
const anotherString= gameName.slice(-8,4)    //can take -ve values: (counts them from the end)
console.log(anotherString)*/

//trim() and replace():
/*const newStringOne= "   hitesh   "
 console.log(newStringOne)
 console.log(newStringOne.trim())*/   
 // The trim() method removes whitespace from both ends of this string and returns a new string, without modifying the original string. A new string representing str stripped of whitespace from both its beginning and end. Whitespace is defined as white space characters plus line terminators. If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str).

/*const url= "https://hitesh.com/hitesh%20choudhary"  //the browser doesn't understand spaces in url thus it performs 'URL Encoding' and replaces spaces with '%20'
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))*/

//we wish to split a string into array based on '-' 
console.log(gameName.split('-'))