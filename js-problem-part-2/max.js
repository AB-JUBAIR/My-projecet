function getMax(num1, num2)

{
if (num1 > num2) {
    return num1;
}   
else {
    return num2;
}
}

const max1 = getMax(25,24);
const max2 = getMax (36, 26);

const ultimatemax = getMax (max1, max2);
console.log(ultimatemax);

// const max = Math.max(12,25521,2245,12,52212,1,512);


const height = [65, 55,24,68,20, 250];
 const arrMax = Math.max(...height) // spreat operator
 console.log(arrMax);
 
let max = height[0];

for (const item of height) {
    if (max < item ) {
        max = item;
    }
}
console.log('the max in this array',max);
// use spread operator to copy
const friends= [22, 52, 65]
const fridn2 = friends;
fridn2.push(120)
console.log(friends);
const boondho = [...friends]
boondho.push(1424) // spreat operator dite copy kore abar push korle ager taar jaygy push hobe na noton vabe kore {eter ste extra element add kora jabe}

console.log(boondho);
console.log(friends);
