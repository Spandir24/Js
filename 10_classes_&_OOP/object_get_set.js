//(III) older way of writing getter & setter via prpts: 'OBJECT BASED SYNTAX'

const User= {
    _email: "h@hc.com",
    _password: "abc",


// we made an obj containing some prpts but we dont want them to be directly accessible as they are stored in object => thus we use 'GETTER-SETTER'

    get email(){
        return this._email.toUpperCase()
    }, 

    set email(value){
        this._email= value
    }
}

const tea= Object.create(User)
console.log(tea.email);
         