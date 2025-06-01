'use strict';

const population = document.getElementsByClassName('population');
const averageElement = document.getElementsByClassName('average-population')[0];
const totalElement = document.getElementsByClassName('total-population')[0];
const array = [];

for (const country of population) {
  array.push(
    +country.innerHTML
      .split('')
      .filter((e) => e !== ',')
      .join(''),
  );
}

let total = array.reduce((prev, elem) => prev + elem, 0).toString();
let average = Math.round(total / array.length).toString();
const result = [total, average];
const processedValues = [];

for (let number of result) {
  for (let i = number.length - 3; i >= 1; i -= 3) {
    const arr = number.split('');

    arr.splice(i, 0, ',');
    number = arr.join('');
  }
  processedValues.push(number);
}

total = processedValues[0];
average = processedValues[1];

totalElement.innerHTML = total;
averageElement.innerHTML = average;
