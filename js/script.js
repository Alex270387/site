/* Задания на урок:

1) Изменить жанр фильма, поменять "комедия" на "драма"

2) Добавить нумерацию выведенных фильмов

3 перенести марс в дата */

var app = new Vue({
    el: '#app',
    data: {
      genre: 'КОМЕДИЯ',
      movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
      ],
    }
})