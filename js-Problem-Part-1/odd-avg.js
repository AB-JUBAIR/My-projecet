function odd_avg(number) {
  let array = [];
  let num = 0;
  let sum = 0;

  for (let index = 0; index <= number; index++) {
    if (index % 2 === 1) {
      array.push(index);
      num += 1;
    }
  }
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    
  }

  let avg = sum / num;
  console.log('All odd number is:',array);
  console.log('Sum of Total odd numbners',sum);
  console.log('avrager of all odd number:',avg);
}

odd_avg(120);
