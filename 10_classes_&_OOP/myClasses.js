//ES6 version ke baad k versions pe hi applicable h ye sb concept


/*class User{
    constructor(username, email, password){       // it is not necessary to alwys write a constructor 
    // this gets called automatically when an object is initialized from a class ie., 'new' keyword is used
        this.username= username,
        this.email= email,
        this.password= password
    }                        
    

    // since this is a function inside a class thus is called=> 'METHOD'  ; syntax is a lil diff than normal func ie., function keyword is not 'wriitten'
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai= new User("Chai", "chai@google.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
*/



// BEHIND THE SCENES: (now doing same as above but w/o 'Class' syntax)

/*function User(username, email, password){
    this.username = username,
    this.email = email,
    this.password = password
}

User.prototype.encryptPassword= function(){
        return `${this.password}abc`
}
User.prototype.changeUsername= function(){
        return `${this.username.toUpperCase()}`;
}

const tea = new User("Tea", "tea@google.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
*/

//HENCE THIS IS WORKING IN A SIMILAR MANNER AS 'Class'

