"use strict";

const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const questionOne = prompt('Один из последних просмотреных фильмов?', ''),
  questionTwo = prompt('На сколько оцените его?', ''),
  questionThree = prompt('Один из последних просмотреных фильмов?', ''),
  questionFor = prompt('На сколько оцените его', '');
personalMovieDB.movies[questionOne] = questionTwo;
personalMovieDB.movies[questionThree] = questionFor;
console.log(personalMovieDB.movies);