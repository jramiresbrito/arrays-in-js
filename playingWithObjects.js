/* Returns the title of all the movies in 2019 with rating > 4
  sorted by their rating in desceding order
*/

const movies = [
  { title: 'John Wick 4', year: 2019, rating: 5 },
  { title: 'John Wick 3', year: 2019, rating: 2.5 },
  { title: 'John Wick 2', year: 2018, rating: 4.8 },
  { title: 'John Wick 1', year: 2019, rating: 4.1 },
];

console.log('Great movies in 2019: ' +
  movies
  .filter(movie => movie.year === 2019 && movie.rating > 4)
  .sort((m1, m2) => m1.rating - m2.rating)
  .reverse()
  .map(movie => movie.title)
);