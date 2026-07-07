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

// Nullish Coalescing operator1(??): null & undefined
let val1;
val1= 5??10;