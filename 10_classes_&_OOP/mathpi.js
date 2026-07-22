const descriptor= Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);
// thus we can also make our own prpts with such specific conditions applied on them 


// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);   // thus this PI prpty ki value cannot be changed

//const mynewObject= Object.create()    //used to create an object OR can be made directly as below

const chai= {
    name: 'Ginger chai',
    price: "250",
    isAvailable: true,

    orderChai: function(){      //when we loop over this Object, func is displayed as it is written in object, which is not optimal thus we put constraint on its displaying by if condition
        console.log("Chai nhi bni");
        
    }
}

// console.log(chai);

//now does this above obj have its ownDescriptor prpts?- If yes, can i change/ set them acc to my req?

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//to disrupt prpts as per our req:
Object.defineProperty(chai, "name", {
//   writable: false,
  enumerable: false       // means iteration over its stops
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
            console.log(`${key}: ${value}`);
    } 
    
}

