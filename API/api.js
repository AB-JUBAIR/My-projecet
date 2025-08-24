
const user = {id : 1 , name : 'jubair' , job: 'programmer'}
// javaScript object Notation
const stringify = JSON.stringify (user);  // convert js into string 
console.log(stringify);

const useObject = JSON.parse(stringify); // convert string into js formate
console.log(useObject);

  