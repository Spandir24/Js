/*const score= 400  // here Js itself understood it to be 'Number'
console.log(score)*/

//to explicitly define the datatype for a variable we do:
/*const balance= new Number(100)
console.log(balance) // the diff in o/p shows the diff Js maintains when we define the variable to be of a specific type


//EXAMPLES of func on Number type
console.log(balance.toString())
console.log(balance.toString().length)       //100 as a string has 3 charc
console.log(balance.toFixed(2))*/             // fixed to 2 decimal places

/*const otherNumber= 23.8966
console.log(otherNumber.toPrecision(4))*/

const hundreds= 1000000;
console.log(hundreds.toLocaleString('en-IN'));