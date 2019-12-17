/* Count the occurrences of a given number in an array */

const numbers = [1, 2, 3, 4];

console.log(countOccurrences(numbers, 1));

function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurence = (current === searchElement) ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
