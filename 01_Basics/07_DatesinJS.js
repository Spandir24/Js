//Dates
/*let myDate= new Date();    //Date object is created
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);
*/

//To declare specific date-
/*let myCreateDate1= new Date()        
let myCreateDate2= new Date(2023, 0, 23)

console.log(myCreateDate1.toDateString())      //give present moment's date and time
console.log(myCreateDate2.toDateString())
*/

/*let myCreateDate= new Date(2023, 0, 23, 5, 3);   //Month begins from 0- when written in single digit in an array.   
console.log(myCreateDate.toLocaleString());
*/

//To get a specific date format- 
// (A)
/*let myCreateDate= new Date("2023-01-14");        // But incase of yy-mm-dd: the month begins from 1
console.log(myCreateDate.toLocaleString());*/

// (B)
/*let myCreateDate= new Date("01-14-2023");        //mm-dd-yy => followed in India
console.log(myCreateDate.toLocaleString());
*/

/*let myTimeStamp= Date.now()
console.log(myTimeStamp);                           // o/p: time from 1 Jan 1970 uptil now in millisec
let myCreateDate= new Date("01-14-2023");
console.log(myCreateDate.getTime());       //we used getTime() on date obj
*/

//To get value of time in sec-
/*console.log(Date.now()/1000);        // but this gives decimal values so to remove it we do the below-
console.log(Math.floor(Date.now()/1000));
*/

/*let newDate= new Date();
console.log(newDate)                // returns current date and time in its own format
console.log(newDate.getMonth());    //count begins from zero here
console.log(newDate.getMonth()+1);  // now we format the output to begin from 1
console.log(newDate.getDay());
*/

//To custom date;
newDate.toLocaleString('default', {
    weekday:"long"
});