//3) reduce()- 
// Syntax: 
/*Array.reduce( (accumulator), currentValue) => {
            // return updated accumulator
}, initialValue );
*/

const myNums= [1,2,3];
/*const myTotal= myNums.reduce( function (acc, currval)  {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0)
*/

//writing via arrow func now:
/*const myTotal= myNums.reduce( (acc, curr) => acc+ curr,0 )*/
//console.log(myTotal);

//Eg: to add all course prices
/*const shoppingCart= [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Py Course",
        price: 2999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]
const priceToPay= shoppingCart.reduce( (acc, item) => acc + item.price, 0 );
console.log(priceToPay);
*/
