console.log(1 );
console.log(2);
setTimeout(() => {
    
    console.log(3);
});
console.log(4);
console.log(5);

let num= 0;
const clockId = setInterval(() => {
    console.log('jubair');
    clearInterval(clockId) // we can write this clearInterval with condition
    
}, 2000);
setInterval()