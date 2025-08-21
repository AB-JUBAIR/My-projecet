const glass = {
    name: 'glass' , 
    color : 'golden' , 
    price: 1200
}; // properties also call keys 
console.log(glass);

const keys = Object.keys(glass)
console.log(keys);// all prperties


const value = Object.values(glass)
console.log(value);// all valllue 



const pair = Object.entries(glass)
console.log(pair); // with properties valllue

// any properties to do delete 
delete glass.color;
console.log(glass);

// freeze coulld be change in this array 
Object.freeze(glass); 

// seal properties add or delete hobe nah but modified kora jabe 
Object.seal(glass)