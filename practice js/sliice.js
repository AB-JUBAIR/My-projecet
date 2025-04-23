const address = 'andarkillah'

const part = address.slice(2, 5)
console.log(part);

console.log('-----------------');

const setence = 'i am a good student and hard worker'
console.log(setence.split());// split er kaj. hocce vagkora
console.log(setence.split(''));
console.log(setence.split(' '));
console.log(setence.split('a'));

const realfriedns = ['rohim', 'korim', 'joshim'];

console.log(realfriedns.join('--'));

const first = 'jubair '
const last = 'abdulah'


const fullname = first+last
console.log(fullname);
const fullname2 = first.concat(' ').concat(last); // first naem and last name r maj khane white spacce add kora

console.log(fullname2);
console.log(fullname.includes('jubair'));


