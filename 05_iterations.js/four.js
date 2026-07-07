// this problem of objects not being iterable thru for-of loop is solved by
// 2) for-in loop-

/*const myObject={
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    // console.log(key);       
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
*/


// (A) IN ARRAYS:
/*const programming= ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    console.log(programming[key]);
}
*/


// (B) IN MAPS:
/*const map= new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

for (const key in map) {
    console.log(key);           
}*/
/*JST KNOW THAT: for...in only knows how to look inside an object for its property names.
                 A Map is not a plain object. It stores its key-value pairs in a different way.
                 So when for...in looks inside a Map, it doesn't find any properties, and the loop never runs.
*/

