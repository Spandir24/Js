/*class User {
  constructor(email, password) {
    ((this.email = email), (this.password = password));
  }

  // suppose we wish to avoid anyone from accessing the password
  get password(){
    //return this._password.toUpperCase()     // thus hum password ka format convert krke dere hn
    // OR ANOTHER EASIER WAY OF EXPLAINING HOW WE CAN CHANGE PASSWORD FORMAT IS-
    return `${this._password}hitesh`
  }

  set password(value){
    this._password= value
  }
} 

const hitesh= new User("h@hitesh.ai", "abc")
console.log(hitesh.password)  
*/


// similarly we can do all this for email prprty as well:
class User {
  constructor(email, password) {
    ((this.email = email), (this.password = password));
  }

  // suppose we wish to avoid anyone from accessing the password
  get password() {
    //return this._password.toUpperCase()     // thus hum password ka format convert krke dere hn
    // OR ANOTHER EASIER WAY OF EXPLAINING HOW WE CAN CHANGE PASSWORD FORMAT IS-
    return `${this._password}hitesh`;
  }

  set password(value) {
    this._password = value;
  }

  //for email too 
  get email(){
    return this._email.toUpperCase();
  }

  set email(value){
    this._email= value
  }
}

const hitesh = new User("h@hitesh.ai", "abc");
// console.log(hitesh.password);
console.log(hitesh.email);


