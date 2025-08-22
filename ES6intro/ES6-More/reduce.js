/**
 * Calculates the sum of all numbers in the `number` array using Array.prototype.reduce.
 * 
 * @constant
 * @type {number[]}
 * @description An array of numbers to be summed.
 *
 * @constant
 * @type {number}
 * @description The total sum of all elements in the `number` array.
 */
const number = [ 2,4, 6,9];
const tota = number.reduce((previous, current) => previous +current, 0)
console.log(tota);
