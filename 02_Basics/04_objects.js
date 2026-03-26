//2 ways of creating an empty object-

//const tinderUser= new Object()      //singleton object    //Object constructor
const tinderUser= {}                  //Non- singleton object

tinderUser.id= "123abc"
tinderUser.name= "Sammy"
tinderUser.isLoggedIn= false
//console.log(tinderUser);

//Objects inside objects-
const regularUser= {
    email: "Some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//console.log(regularUser.fullname);    //written just to see how object is stored
//console.log(regularUser.fullname.userfullname.firstname);

//to combine objects- (just like arrays)
const obj1= {1: "a", 2: "b"}
const obj2= {3: "c", 4: "d"}
const obj4= {5: "e", 6: "f"}
//way-1) similar problem as array arises here: "obj inside object"-
/*const obj3= {obj1, obj2}
console.log(obj3) */

//way-2) to avoid this problem-                       //less preferred
/*const obj3= Object.assign({}, obj1, obj2, obj4)
console.log(obj3) */     

//way-3) the 'SPREAD' method-                       //90% usage
/*const obj3= {...obj1, ...obj2}
console.log(obj3); */

//multiple 'objects' as elements inside an array
/*const users= [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]
console.log(users[1].email)  */      //STEP: 1) an array => thus indexed,
                                    // then, 2) object => accesed via (.) dot notation

//***********
console.log(tinderUser)
//imp methods-
//console.log(Object.keys(tinderUser))       //returns an array*** (V.IMP)
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))   //each 'key:value' pair is made an array.
//to ask whether a particular value(ie., key) exists in an object-
console.log(tinderUser.hasOwnProperty('isLoggedIn'));            
