const number = [ 1,2,3,5,6,7];
const result = number.forEach(n => {
    console.log(n);
    return n * n;
})
console.log(result);
