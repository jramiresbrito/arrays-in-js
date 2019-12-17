/* Create an array by given borders */

const numbers = arrayFromRange(-10,-5);

console.log(numbers);

function arrayFromRange(min,max) {
  if (min > max)
    throw new Error('Min > Max');
  const arr = [];
  for(let i = min; i <= max; i++)
    arr.push(i);
  return arr;
}