/*const coding= ["js", "ruby", "java", "python", "cpp"];
//what if i wish to see if i can store values of the forEach() loop
const values= coding.forEach( (item) =>{
    console.log(item);
    return item;       //if i try returning item via this statement    => still it returns undefined
} )
console.log(values);
*/

// THEREFORE, forEach() doesn't return anything.

//1) filter()- 
const myNums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//implicit return
// console.log(myNums.filter( (num) => num > 4  ));
//const newNums= myNums.filter( (num) => num > 4 );    // to store the returned array

// explicit return: [we need to use the 'return' keyword when using {scope}]
/*const newNums= myNums.filter( (num) => {
    return num > 4;
} );

console.log(newNums);
*/

// via forEach()- [lengthy & complex to code]
/*const newNums= [];
myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num);
    }
} )
console.log(newNums);
*/

// Eg practice:
/*const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')

// to chk multiple conditions
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);
*/
