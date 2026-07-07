// ["", "", ""] -array of strings
// [{}, {}, {}] -array of objects

// 1) for-of loop-

// (A) IN ARRAYS:
/*const arr= [1,2,3,4,5]
for (const num of arr) {
    console.log(num);    
}
*/

/*const greetings= "Hello World!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
*/

// Maps-     => objects holds key-value pairs
/*           => maintains original insertion order of keys
             => Any value (both objs & primitive values) may be used as either key or value.
             => key's are UNIQUE
*/ 

// (B) IN MAPS:

const map= new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
// map.set('IN', "India");     // when same key is inserted, the order of key still remains the same as before. - (bs iss line mn issse zyda kn sochna)
//map.set('IN', "Bharat");        //When you call set() with a key that already exists, if the value is diff ,the value for that key is updated. - - (bs iss line mn issse zyda kn sochna)

// console.log(map);

/*for (const key of map) {
    console.log(key);           // this prints the exact map with structure(ie brackets & '').
}
*/

//called De- structuring of array:
/*for (const [key, value] of map) {
    console.log(`${key} :  ${value}`);       // this prints with desired formatting
}
*/

// (C) IN OBJECTS:
/*const myObject= {
    'game1' : 'NFS',         // writing obj this way (ie, in keys in '') is not iterable
     game2 : 'Spiderman'    // writing obj this way (ie, w/o '') is also not iterable
}

for (const [key, value] of myObject) {
    console.log(`${key} :  ${value}`);
}
*/

/*NOTE: 'for-of' is not meant for iterating over the properties of plain objects. [becz plain obj are not iterable]
for Objects use:  -> for- in loop
                  -> modern syntax(similar to maps):     for (const [key, value] of Object.entries(person)) {
                                            console.log(key, value);
                                        }
*/