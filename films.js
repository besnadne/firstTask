"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов!');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы класический зрител');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман!');
  } else {
    alert('Произошла ошибка!');
  }
}
detectPersonalLevel();

function rememberMyFilms() {
  let questionOne,
    questionTwo;
  let i = 0;
  do {
    questionOne = prompt('Один из последних просмотреных фильмов?', '');
    questionTwo = prompt('На сколько оцените его?', '');
    i++;
    if (questionOne != '' && questionOne != null && questionOne.length < 50 && questionTwo != '' && questionTwo != null && questionTwo.length < 50) {
      console.log('Done');
      personalMovieDB.movies[questionOne] = questionTwo;
    } else {
      console.log('Error')
      i--;
    }
  } while (i < 2);
}
rememberMyFilms();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDB();

function writeYourGenres() {
  for ( let i = 1 ; i < 4 ; i++) {
     const question = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i-1] = i;
  }
}
writeYourGenres();