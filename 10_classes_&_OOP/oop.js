// 'object' hi 'object literal' h
const user = {
  username: "Sana",                             // these are prpts
  loginCount: 8,
  signedIn: true,

  // since object literals are similar to objects they can be referred to as a collection of prpts & methods
  getUserDeatils: function () {                // this is a method
    // console.log("Got user details from DB");
    // console.log(`Username: ${this.username}`);   // "Bahar se jab samman lena h toh func ke execution context(EC) ko btaana pdta h ki mn apne samman ki baat kr ra hu which is referred to by 'this' "

    console.log();
    
    
  },
};

console.log(user.username);
console.log(user.getUserDeatils());
