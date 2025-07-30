/**
 * having pause |-------> network calls 
 *              |------->   write / read files 
 *              |------->   time functiono 
 *              |------->   userINput
 *              |------->   Other.....
 */
console.log("chaicode");
//------------------------------------------
function  SayHello ()
{
    console.log("i would like to say hello after 4 second");
}
setTimeout(() => { SayHello()}, 4000); // 4 second
//---------------------------------------------------------

for (let index = 0; index < 10; index++)
    {
console.log(index);
}
/**
 * event loop
 */
setTimeout(() => {
    console.log("after 5 second print this line");
    
}, 5000);