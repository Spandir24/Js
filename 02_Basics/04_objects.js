//VID: 17
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
//console.log(tinderUser)
//imp methods-
//console.log(Object.keys(tinderUser))       //returns an array- containing keys*** (V.IMP)
// console.log(Object.values(tinderUser))    //returns an array- containing values
// console.log(Object.entries(tinderUser))   //each 'key:value' pair is made an array.
//to ask whether a particular value(ie., key) exists in an object-
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));            


//-------------------------------------
//VID- 18:  Destructuring: 1)objects & 2)arrays- [done very rare]

//destructuring of object-
const course= {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh",
}
//how to use these values- obv via console.log()- console.log(course.courseInsrtuctor)
//but we have another cleaner way of writing the same:
/*const {courseInstructor}= course;
//             |            |
//      (which value)    (from_where_value_to_be_extracted)
console.log(courseInstructor);
*/

// OR

/*const {courseInstructor: instruc}= course;        // we destructured an obj 
console.log(instruc);
*/

//in react- JST READ THRU:
/*const navbar= ({company}) => { 
//here instead of writing (prop.company) everytime, they destructure it by writing inside {
// => {} syntax means destructuring is being done.
}
navbar(company= "Hitesh")
*/

//API- gives values from backend: earlier used to be in XML structure(v complex), but now in Json(jst like obj w/o name)- eg:-
//in Json- both 'keys' & 'values' are written as "strings". 
// FORMAT:- "API AS OBJ"
/*{
    "name": "hitesh",
    "coursename": "Js in hindi",
    "price: "free"
}       //here this format is showing some errors but ignore them, this is CORRECT. 
*/
//Eg of a Json formatted API(as obj): https://api.github.com/users/hiteshchoudhary


//Also, sometimes we get APIs(in Json format only but) in the form of "arrays" which contains similar kind of objects (discussed above).
// FORMAT:- 
/*[
    {},
    {},
    {}
]
*/
//Eg of a such API: 
// 1.(we copied an API from 'randomuser me API'- 'HOW TO USE' section- 'url' => 
// {"results":[{"gender":"female","name":{"title":"Mrs","first":"Rusudana","last":"Golubnichiy"},"location":{"street":{"number":8551,"name":"Stepana Banderi"},"city":"Sambir","state":"Dnipropetrovska","country":"Ukraine","postcode":59394,"coordinates":{"latitude":"73.2337","longitude":"128.6409"},"timezone":{"offset":"-10:00","description":"Hawaii"}},"email":"rusudana.golubnichiy@example.com","login":{"uuid":"c361d0c2-8708-48fe-a325-05c90562867b","username":"greenbear435","password":"blunt","salt":"CcII864m","md5":"2dc128b74e399750889a212a473c4f69","sha1":"f363fb0b9dfe353a63406e40c6392ef22fc7807e","sha256":"f64190f07a5893defa4edf1a617c9e3d87b1ce9f8206d5718e5f553e0634b33b"},"dob":{"date":"1988-02-18T03:53:09.453Z","age":38},"registered":{"date":"2014-09-22T13:08:35.020Z","age":11},"phone":"(068) L15-4473","cell":"(097) O76-5303","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/3.jpg","medium":"https://randomuser.me/api/portraits/med/women/3.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/3.jpg"},"nat":"UA"}],"info":{"seed":"afbb571595441e87","results":1,"page":1,"version":"1.4"}}

// 2. Pasted it on Json formatter

//API's IS ALL JSON format.