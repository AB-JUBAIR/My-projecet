// for of use on array or string not in object 
// for in use on boject 

const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
};


// for (const key of person) {
//     console.log(key);
    
// }

for (const key in person) {
    const value = person[key];
console.log(key , value);
        
}

