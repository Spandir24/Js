//LOOPS:
// 1) for loop- ({}- mean block scope)
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        //console.log("5 is best number")
    }
    //console.log(element);
} 
//console.log(element);

/*for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
        //console.log(`Inner loop value: ${j} for outer loop ${i}`);    // to see wrking of for loop
        console.log(`${i} * ${j} = ${i*j}`)
    }   
}
*/

//on arrays
/*let myArray= ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];  
}
*/

//jump statements- break and continue
/*for (let index = 1; index <=20 ; index++) {
    if(index==5){
        console.log(`Detected 5!`)
        break;                               // comes out of the loop. If used inside a nested loop, it only exits the innermost loop where it appears. The outer loop continues executing.
                                            //If you want to exit both loops, you can use a labeled statement- SYNTAX: break label:- ' break outerLoop; ' 
    }
    console.log(`Value of i is ${index}`); 
}
console.log("Program ended!")
*/


/*for (let index = 1; index <=20 ; index++) {
    if(index==5){
        console.log(`Detected 5!`)
        continue; 
    }
    console.log(`Value of i is ${index}`); 
}
console.log("Program ended!")
 */       