"use strict";

let numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');


let personalMovieDB = {
    count: console.log(numberOfFilms),
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let questionOne = prompt('Один из последних просмотреных фильмов?', '');
let questionTwo = prompt('На сколько оцените его?', '');
let questionThree = prompt('Один из последних просмотреных фильмов?', '');
let questionFor = prompt('На сколько оцените его', '');
personalMovieDB.movies = {
    questionOne: questionTwo,
    questionThree: questionFor
};