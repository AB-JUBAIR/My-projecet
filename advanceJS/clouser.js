function outer ()
{
    let counter = 5;
    return function () // Now it can return anonymous function coz function hav't name
    {
        counter ++;
        return counter;
    };
}
let inciment = outer();
console.log(inciment);
