const getAge = (person) => { return person.age}; // for signle perameter {} dile return likte hobe
const student = {name: "jubair", age: 25}
const age = getAge(student)
console.log(age);

const name = (person) =>  person.name;
// for single perameter
const name1 = person =>  person.name;
// no perameter
const getPi = () => Math.PI

// larger arrow functin 
const doMath = (x, y, z) =>{
    const sum = x+y+z;
const result = sum;
return result; // ------ return key  dite hobe
}