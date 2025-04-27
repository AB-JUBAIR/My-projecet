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

let max = height[0];

for (const item of height) {
    if (max < item ) {
        max = item;
    }
}
console.log('the max in this array',max);
