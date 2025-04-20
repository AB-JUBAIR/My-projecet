const numbers = [12, 251,2442, 45];
const frieds = ['abul', 'babul', 'cabul', 'kabu'];

/**
 * array length const A =[0, 3,3 , 5, 5, 7 ,5 ,4 ];
 * console.log(A.length);
 *
 */

// for (let i = 0; i < numbers.length; i++) 
//     {
//     const element = numbers[i];
//     console.log(element);
// }


// console.log( numbers);
// ****************----------- push and pop or Pop operation -----****************

const ages = [20];
console.log(ages);
ages.push (50);
console.log(ages);
ages.pop ();
console.log(ages);

//---------- array using as condition 

if (frieds.includes('abul')) {
    console.log('gelam');
}
else
{
    console.log('ghmaylam');
    
}
// /--------- kon array te value ace kii na seta dekar jonno 
console.log(frieds.includes('babul'));
//----------Print the index number from array

console.log(frieds.indexOf('babul'));

/*
friend.slice(1,5); // ------[ 1 teke 5 porjonto index number count korbe]


array ki vabe join kore
*/




