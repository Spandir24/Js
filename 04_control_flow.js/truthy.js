const userEmail= "s@sana.ai"

/*if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't hv user Email");
}
*/

// falsy values: false, 0, -0, BigInt, 0n, "", null, undefined, NaN
//truthy values: "0" -(0 inside str), 'false', " " -(space inside str), [], {}, function(){} - ('empty func' is also truthy)


//to chk for empty arrays:
/*if(userEmail.length === 0){
    console.log("Empty array.");
}
*/

//to chk for empty obj:
/*const emptyobj= {}
if (Object.keys(emptyobj). length === 0) {                         // Object.keys returns array of keys
    console.log("Empty obj.");
}
*/

//NOTE: imp for competitive progr. & INTERVIEWS-
/*
false == 0    => true
false == ''   => true
0 == ''       => true
*/

//TWO DIFF TYPES OF OPERATORS
//1. Nullish Coalescing operator1(??): null & undefined- returns the right-hand value only if the left-hand value is null or undefined.
let val1;
//val1= 5 ?? 10;
//val1= null ?? 10
//val1= undefined ?? 15
val1= null ?? 10?? 20

//console.log(val1);


//2. Ternary operator
//syntax:  condition ? true : false

const iceTeaPrice= 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

//EXTRA:
/*
(1 || 0) - uses the logical OR (||) operator.

The || operator returns the first truthy value it encounters. If the first value is falsy, it returns the second value.
*/