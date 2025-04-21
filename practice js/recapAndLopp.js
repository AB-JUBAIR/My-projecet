/**
 * const: value will not chane 
 * let: value will can change 
 * var: we should not use it
 * 
 */

/*
const fruits =[12, 25, 2154, 15, ];

for (const index of fruits) { // its called forof loop
    console.log(index);
    console.log('i want to eat'); 
}
*/

//-----------while loop

let num = 0;
while (num < 6)
{
   
num++ // num= num +1; /// num += 1;
 console.log(num);

}
console.log('-----------------------');

// even number jor sonkka if (num % 2 = 0)
for (let index = 0; index <=20; index= index +2) {
    console.log(index);
}
// odd number  vijor sonkka if (num % 2 = 1)
console.log('------------------');

for (let index = 1; index <=20; index= index +2) {
    console.log(index);
}

///**
// for loop diye incrimental or dicrimental for loop calaw
//  */

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}