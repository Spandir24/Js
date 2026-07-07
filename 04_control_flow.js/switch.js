//(II) to chk multiple cond: [Used when you're comparing one variable/expression against multiple exact values]
// SYNTAX:-
/*switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

//Eg:
/*const month= 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        //break;                            // except DEFAULT****
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match. Code Exited!")
        break;
}
*/

//similarly the keys are written for string comparisons-
/*const month= "march";
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;                            
    case "april":
        console.log("April");
        break;

    default:
        console.log("Default case match. Code Exited!")
        break;
}
*/

//switch can also perform grping of multiple multiple cases:
/*let grade = "B";

switch (grade) {
  case "A":
  case "B":
  case "C":
    console.log("Pass");
    break;

  case "D":
  case "F":
    console.log("Fail");
    break;
}
*/