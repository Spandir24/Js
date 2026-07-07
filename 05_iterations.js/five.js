// for-each loop-
const coding= ["js", "ruby", "java", "python", "cpp"];
/*syntax of forEach():
    forEach( function (){} )
*/
/*coding.forEach( function(val){
    console.log(val);
} )
*/

//can also be written via arrow func:
/*coding.forEach( (item) => {
    console.log(item);
} )                
*/

// a basic func written, which takes 'item' and prints it
/*function printMe(item){
    console.log(item);
}*/
// so can we pass a func as item? - YES, done quite a lot!
// Either write func as parameter (w/o name) in forEach()    OR
// if func already defined somewhere else, pass 'function REFERENCE'** as parameter
/*coding.forEach((printMe));*/

// forEach() can take multiple parameters-
/*coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )
*/

// We accessed a prpty of object from an 'array of objects'
// studying- [{}, {}, {}]  *****(V.IMP)- (becz DBs gives data in the form of 'array of objects')
const myCoding= [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);              // {} => is 'item' here
                                                // Also, (arrays are 'INDEXED'), objects are 'KEYED' (via dot notation)
} ) 
