// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (moviesArray) => {
  let directorsDuplicate = moviesArray.map((movie) => movie.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
  
  let directorsNoDuplicate = directorsDuplicate.filter((director, index) => {
    return directorsDuplicate.indexOf(director) === index;
  });
  return directorsNoDuplicate;
};
let allDirectors = getAllDirectors(movies);
console.log(allDirectors);

getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
  let stevenDramaMovies =  movies.filter((peliculas) => {
    return (
      peliculas.director === "Steven Spielberg" && peliculas.genre.includes("Drama")
    );
  });
  console.log(stevenDramaMovies);
  return stevenDramaMovies;
}
howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (moviesArray) => {
  let totalScore = movies.reduce((acumulador, valorActual) => {
    if (valorActual.score) {
      return acumulador + valorActual.score;
    } else {
      return acumulador;
    }
  }, 0);
  let avg = (totalScore / movies.length).toFixed(2);
  console.log(avg);
  return avg;
}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (moviesArray) => {
  let dramaMovies = movies.filter((movie) => movie.genre.includes("Drama")
  );
  console.log(scoresAverage(dramaMovies));
  return (scoresAverage(dramaMovies));
}
dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (moviesArray) => {
  let array = movies.map((movie) => movie);
  array.sort((movieA, movieB) => {
    if (movieA.year > movieB.year) return movieA.year - movieB.year;
    if (movieA.year > movieB.year) return movieA.year - movieB.year;
    else return movieA.title.localeCompare(movieB.title);
  });
  console.log(array);
  return array;
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
  return movies.map((pelicula) => pelicula.title).sort();
}
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
