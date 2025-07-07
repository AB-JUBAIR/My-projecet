/**
 * having pause |-------> network calls 
 *              |------->   write / read files 
 *              |------->   time functiono 
 *              |------->   userINput
 *              |------->   Other.....
 */
console.log("chaicode");

function SayHello (){
    console.log("i would like to say hello");
    
}
setTimeout(() => {
    SayHello()
}, 4000); // 4 munits

for (let index = 0; index < 10; index++) {
console.log(index);

}
/**
 * event loop
 */