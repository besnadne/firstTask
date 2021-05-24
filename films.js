"use strict";

 const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');


 const personalMovieDB = {
   count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };
  if (personalMovieDB.count < 10) {
   alert('Просмотрено довольно мало фильмов!');
 } else if  (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
   alert('Вы класический зрител');
 } else if (personalMovieDB.count >= 30) {
   alert('Вы киноман!');
  } else {
    alert('Произошла ошибка!');
  }
 
let  questionOne,
     questionTwo;

for (let i = 0;i < 2;i++) {
    questionOne = prompt('Один из последних просмотреных фильмов?', '');
    questionTwo = prompt('На сколько оцените его?', '');
    if (questionOne != '' && questionOne != null && questionOne.length < 50 && questionTwo != '' && questionTwo != null && questionTwo.length < 50) {
      console.log('Done');
      personalMovieDB.movies[questionOne] = questionTwo;
    } else {
      console.log('Error')
      i--;
    }
  }
 console.log(personalMovieDB.movies);
 
