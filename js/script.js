"use strict"

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
 
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

// personalMovieDB.movies.filmOne = prompt(
//     'Один из последних просмотренных фильмов?');
// personalMovieDB.movies.starsOne = +prompt('На сколько его цените?');
// personalMovieDB.movies.filmTwo = prompt(
//     'Один из последних просмотренных фильмов?');
// personalMovieDB.movies.starsTwo = +prompt('На сколько его цените?');

if(personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы настоящий коиноман");
} else {
    alert('Произошла ошибка');
}

let flag = 1;
let check = false;

while (flag < 3){
    while (!check){
    let qntyFilms = prompt('Один из последних просмотренных фильмов?');
    if(qntyFilms != null && qntyFilms != '' && qntyFilms.length < 10){
        personalMovieDB.movies[flag + 'film'] = qntyFilms;
        check = true;
        console.log(check);
    } else {
        console.log('error');
    }
}
    while(check){
    let starOfFilm = prompt('На сколько его цените?');
    if(starOfFilm != null && starOfFilm != '' && starOfFilm.length < 10){
        personalMovieDB.movies[flag + 'stars'] = starOfFilm;
        check = false;
    } else {
        console.log('error');
    }
}
    flag++;
}

console.log(personalMovieDB);

