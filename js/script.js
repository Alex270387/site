/* Задания на урок:

1) Изменить жанр фильма, поменять "комедия" на "драма"

2) Добавить нумерацию выведенных фильмов

3 перенести марсианин в дата */

var app = new Vue({
    el: '#app',
    data: {
      title: 'МАРСИАНИН',
      genre: 'Драма',
      inputValue: '', 
      checked: false,
      movies: [
        "Логан",
        "Юла",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Алла",
        "12312353463 25645778568"
      ],
    },
    computed: {
        sortFilms: function () {
            return this.movies.sort();
        }
    },

    methods: {
        normalizeFilm: function (filmName) {
            if (filmName.length > 21) {
                filmName = filmName.substring(0, 22);
            }
        },
        deleteFilm: function (index) {
            this.movies.splice(index, 1);
        },
        addFilm: function () {
            if (this.checked) {
                this.movies.push(this.inputValue + ' (favorite)');
            } else {
                this.movies.push(this.inputValue);
            }
                this.inputValue = '';
        }
    }
});