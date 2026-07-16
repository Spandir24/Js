// majority times we are going to consume promises here, but promises are created also.
//Firstly, we'll learn to make diff types of promises:
/*const promiseOne= new Promise(function(resolve, reject) {
    // Do an async task: DB calls, cryptography related, network related calls
    // here we consider:
    setTimeout(function() {
        console.log("ASYNC task is complete");
        resolve()
    }, 1000)
})

//now we need to use the above created promise
promiseOne.then(function(){
    console.log("Promise consumed")
})
// after doing console.log at this stage only setTimeout() executes. But 'Promise consumed' does not display. 
// WHY?- becz we did not connect resolve an .then  via => resolve()

// NOTE: that 'Promise consumed' will never come first becz 1st the async task was completed then it was resolved.
*/

// now the same (above) task can be done w/o storing the promise in a variable: in a single part
/*new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("ASYNC task 2");
        resolve();     // when this task will be completed then, resolve() will automatically  inform .then()
    }, 1000)           // this can be any async task

}).then(function(){
    console.log("ASYNC 2 resolved!");
})
*/

//Suppose, promise ka callback func goes & gets some data from network/ file system- we need to pass that data to .then()  [which we said, recieves the return value of the task executed by promise]
/*const promiseThree= new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve( {username: "Chai", email: "chai@example.com"} )   // thus, that data is passed thru resolve() as a parameter whic can be array, obj, func(). Majority times it will be an object
    }, 1000)
})
promiseThree.then(function(user) {
    console.log(user); 
})
*/

// we are performing error based checking
/*const promiseFour= new Promise(function(resolve, reject){
    setTimeout(function() {
        let error= true
        // let error= false
        if(!error){
            resolve( {username: "Sana", password: "123"})
        } else{
            reject('ERROR: Something went wrong')  // 'reject' is used to give error
        }
    }, 1000)
})

//how callback hell is avoided/ reduced: [we can use any no of .then() & .catch()]- // .then for taking values returned by the promise() & '.catch()' to catch errors
promiseFour
.then( (user) => {
    console.log(user);
    return user.username;    // but where is this data being returned to?- variable mn, lets chk! => we chkd: aise toh kaam nhi hota
    // we do chaining of .then() and also need to write .catch() now
    
}).then( (myUsername) => {
    console.log(myUsername);
    
}).catch(function(error){
    console.log(error);
    
// now, to get a confirmation(ie it is executed alwys) of a promise ie-  resolve/ reject case hai ye finally?
}).finally( () => console.log("The promise is either resolved or rejected."));
*/

//here, we try accepting this file returned the promise via some other way instead of '.then() . catch()'
/*const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error= false
    if (!error) {
      resolve({ username: "Js", password: "123" });
    } else {
      reject("ERROR: Js went wrong"); // 'reject' is used to give error
    }
  }, 1000);
});

// async function consumePromiseFive() {
//   const response = await promiseFive;     // here PromiseFive is an object
//   console.log(response);
// }
// this does not handle errors gracefully thus we wrap it in a try- catch block

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()
*/ 

// Thus, we can use any of the above 2 whichever suits use: async/await OR try/catch


/*async function getAllUsers() {
    try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        // first we must know 'type' of the response
        const data = await response.json(); // becz as of now the data we are receiving is in 'string' format, thus we converted it to json to peroform reqd operations on it (if any)
        // also. this conversion takes time thus we need to write 'await' here

        console.log(data);

    } catch (error) {
        console.log("E: ", error);
        
    }
}
getAllUsers()

*/

// Now, we wish to write the same above code using '.then().catch()'
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(data);
  });
// GOOD THING here is: each subsequent block starts only when the prev completes
// Since we are directly using fetch thus there is no need to call it as a func














// git config --global user.name "Spandir24"
// git config --global user.email "pandirsana@gmail.com"
