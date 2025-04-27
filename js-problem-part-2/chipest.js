const phones = [
  { name: "smsung", price: 20000 },
  { name: "iphone", price: 470000 },
  { name: "xaomi", price: 50000 },
  { name: "walton", price: 10000 },
];

function getchepestphone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (min.price > phone.price) {
      min = phone;
    }
  }
  // console.log(phone);
  return min.price;
}
const chep = getchepestphone(phones);
console.log('the chepest price is :', chep);
