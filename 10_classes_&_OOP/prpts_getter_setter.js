// older way of writing getter & setter via prpts: 'FUNCTION BASED SYNTAX'

// pehle classes wgera toh thi nhi, func hi hote the-
function User(email, password){
    this._email= email, 
    this._password= password 

    // becz func is also an object thus we can directly utilise its prpts:
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email= value
        },
    })

    Object.defineProperty(this, "password", {
      get: function () {
        return this._password.toUpperCase();
      },
      set: function (value) {
        this._password = value;
      },
    });

}


const chai= new User("chai@chai.com", "chai")
console.log(chai.email);
