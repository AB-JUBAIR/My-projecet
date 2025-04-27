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
