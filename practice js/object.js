const age = 21; 
 const school = 'mghy schoool';
 const bottleWrong = ['white', 45];

 /**
  * how to create object 
  * Non-Prmitive
  */

 const bottle = {
    brand: 'apple',
    price: 25,
    color: 'white',
    isClean: false
 }
 const subject =  {
    name:  'biology',
    teacher: 'rasheda  maam',
    exammernar: '30 feb',
    chapter: ['first', 'second']
 }
//  console.log(subject);
 
 console.log(subject.name); // dot notation 
 // bracker notation 

 console.log(subject['chapter']);
// how t find the object property or keys
const keys = Object.keys(subject);
 console.log(keys);
 // 
 const values  = Object.values(subject);
 console.log(values);
 

 for (const prop in subject) {
   console.log(prop); // property print korbe
console.log(subject[prop]); // values print korbe 

   
 }

 for (const prop in subject) {
    console.log(prop , ':', subject[prop]); // property print korbe
  // values print korbe 
  }