//2 ways of creating an empty object-
//const tinderUser= new Object()      //singleton object
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
// similar problem as array arises here: "obj inside object"-
//const obj3= {obj1, obj2}
//to avoid this problem:
console.log(obj3)

//Object constructor-