function outer ()
{
    let counter = 0;
    return function () // Now it can return anonymous function coz function hav't name
    {
        counter ++;
        return counter;
    };
}
let inciment = outer();
console.log(inciment());
console.log(inciment());
console.log(inciment());
