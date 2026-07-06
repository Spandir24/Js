//syntax of iife:    ()()
/*(function chai(){
    console.log(`DB Connected!`);
})();                      // called 'Named IIFE'
*/

//similarly it executes for arrow func:
/*(  () => {
    console.log(`DB Connected two!`);
}   )()
*/

//similarly runs for this func- (same as 1st)
/*(  function aurCode(){
    console.log(`DB Connected two!`);
}   )()
*/

//to pass a parameter & arguments to this function-
(  (name) => {
    console.log(`Hey ${name}, DB Connected two!`);
}   )('Sana')                                  // this is not a named IIFE, simple/ unnamed IIFE h ye becz no name