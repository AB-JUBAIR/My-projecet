function outer (){
    let counter = 5;
    return function () {
        counter ++;
        return counter;

    };
}
let inciment = outer();
console.log(inciment());
