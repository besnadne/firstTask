"use strict";

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
//   }
// }
// start();


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start : function ()  {
    personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
    }
  },
  detectPersonalLevel :function () {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы класический зрител');
    } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман!');
    } else {
      alert('Произошла ошибка!');
    }
  },
  rememberMyFilms :function (){
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
        console.log('Error');
        i--;
      }
    } while (i < 2);
  },
  showMyDB:function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres:function () {
    for ( let i = 1 ; i < 4 ; i++) {
       const question = prompt(`Ваш любимый жанр под номером ${i}`);
       personalMovieDB.genres[i-1] = question;
      if (question == ''|| question == null) {
        i-- ;
       } else {
         personalMovieDB.genres = question;
       }
     
     }
     personalMovieDB.genres.forEach(function(genre, i, genres) {
      console.log(`Любимый жанр № ${i+1} - это ${genre}`);
    }) ;
  },
  toggleVisibleMyDB: function () {

    if (personalMovieDB.privat){
      personalMovieDB.privat = false;
    }else {
      personalMovieDB.privat = true;
    }
  }
  

//  personalMovieDB.start();
//  personalMovieDB.detectPersonalLevel();
//  personalMovieDB.rememberMyFilms();
//  personalMovieDB.showMyDB();
//  personalMovieDB.writeYourGenres();
//  personalMovieDB.toggleVisibleMyDB();


};