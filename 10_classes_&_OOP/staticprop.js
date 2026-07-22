class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  //MongoDb ID generation functionality is made here:
//   createId() {
//     return `123`; // or a random no can be generated
//   }

  static createId() {
    return `123`; // or a random no can be generated
  }
}

const hitesh = new User("Hitesh")
// console.log(hitesh.createId())     // with 'static' the function own class doesn't get its access

// Now we dont want to give a particular prpty/ method's access to every obj instantiated from that class
// just use 'static' keyword before that method name and it becomes inaccessible even to child classes

class Teacher extends User{
    constructor(username,email){    // order of arguments dosn't matter 
        super(username)
        this.email= email
    }
}

const iphone= new Teacher("iphone", "i@phone.com")
// iphone.logMe()
console.log(iphone.createId())