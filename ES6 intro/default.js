
//  defualt--------- > if value is not provided ,, take this action

function add(num1 = 1, num2 = 5){
 const result = num1 + num2;
 console.log( num1 , num2, result);
 return result;
 
}

const sum = add (5, 10);
const toaata = add();//------- if we do not assigned value

// tamplate for string 
const first = 'jsson'
const last = 'paki'
const fullname =first + ' '+ last ;
console.log(fullname);

// backtick `` use for multiline string ans single line string 
// template string 
const math = `The sum of ${toaata}`

console.log(math);
