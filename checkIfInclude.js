/* Check if an element is present in a given array */

const numbers = [1,2,3,4];

const includes = function (arr, searchElement) {
  for(let element of arr)
    if (element === searchElement)
      return true;
  return false;
}

console.log(includes(numbers, -1));