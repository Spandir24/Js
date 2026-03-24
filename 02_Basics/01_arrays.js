//arrays- //can contain mixed DT "elements" also

//declaration
/*const myArr= [0,1,2,3,4,5];      
const myHeroes= ["Shaktiman", "Naagraj"]
const myArr2= new Array(1,2,3,4)        //using 'new' keyword
console.log(myArr[0])
console.log(myHeroes.length)
*/

//methods
//myArr=[1,2,3,4,5];

/*myArr.push(6)
myArr.push(7)
console.log(myArr)

myArr.pop()     //removes last element
console.log(myArr)
*/

/*myArr.unshift(9)
console.log(myArr)
myArr.shift()
console.log(myArr)
*/

/*console.log(myArr.includes(9))
//Extra eg: 
//let str= "hello";
//console.log(str.includes("ell"))  //true

console.log(myArr.indexOf(9))
*/

/*const newArr= myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//Extra eg:
//console.log([1, true, ""].join(","))           // "1,true,"
*/

//slice, splice
/*myArr=[0,1,2,3,4,5];

console.log("A", myArr)

const myn1= myArr.slice(1,3)       //[start,end)
console.log(myn1)

console.log("B", myArr)


const myn2= myArr.splice(1,3)       //[start,end]
console.log(myn2)
console.log("C", myArr)
*/

/*EXTRA EXPLAINATION OF .splice():-
SYNTAX: array.splice(start, deleteCount, item1, item2, ...) ;
where- start → where to begin
       deleteCount → how many to remove
       item1, item2, ... = elements you want to INSERT at that position
*/

//1.Example (remove)
/*let arr = [1, 2, 3, 4];
arr.splice(1, 2);          //(st,deleteCount)
console.log(arr); // [1, 4] ❗ modified
*/

//2.Example (add)
/*let arr = [1, 4];
arr.splice(1, 0, 2, 3);
console.log(arr); // [1, 2, 3, 4]
*/

//3.Example (replace)
/*let arr = [1, 2, 3];
arr.splice(1, 1, 99);
console.log(arr); // [1, 99, 3]

(IMP) STEPS-
1. Start position: Index 1 → value 2
2. Delete count: Remove 1 element→ removes 2=> Now array becomes:[1, 3]
3. Insert items: Insert 99 at index 1=> Final array: [1, 99, 3]


NOTE: Remove X elements, then insert new ones at that same spot.
*/

//IMPORTANT EG: 
//(A)- If deleteCount is missing → removes everything from start to end.

/*let arr = [1, 2, 3];
let removed = arr.splice(1);
console.log(arr);              //arr = [1]
console.log(removed);          //removed = [2, 3]
*/

//(B)- If start > length → it just adds at the end
/*let arr = [1, 2, 3];
arr.splice(5, 1, 99);
console.log(arr);              //[1, 2, 3, 99]
*/

//(C)- Trying to delete more than exists → It removes everything from index 1 onward.
/*let arr = [1, 2, 3];
arr.splice(1, 10);
console.log(arr);             //[1]
*/