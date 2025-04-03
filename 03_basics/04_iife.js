// immediatelt invoked function expressions (IIFE)

// (function chai(){
// named iife
//     console.log(`DB Connected`);
// })();
//1) function which immediate access
//2) global scope pollution ko hatane k liye use hota hai 
//3) jabhi iife function ko end karo toh semicolon laga do warna next function nahi chalega

( () =>  {
    console.log(` db con`);
}) ();

( (name) =>  {
    // unnamed iife
    console.log(` db con name is ${name}`);
}) ('yogesh')