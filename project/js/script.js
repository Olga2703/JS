/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promoAdv = document.querySelectorAll('.promo__adv img'),
          promoGenre = document.querySelector('.promo__genre'),
          bg = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list'),
          newMovieAdd = document.querySelector('form.add'),
          newMovie = newMovieAdd.querySelector('.adding__input'),
          checkbox = newMovieAdd.querySelector('[type="checkbox"]'); 
    
    

    const deleteAdv = (arr) => {
        arr.forEach(item =>{
            item.remove();
        });
    };


    const makeChanges = () => {
        promoGenre.textContent ='драма';
    
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(film, parent) {
        parent.innerHTML = "";
    
        film.forEach((film, i) =>{
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>`; 
        });
    }
       
    newMovieAdd.addEventListener('submit', function(e) {
        
        e.preventDefault();

        const newFilm = newMovie.value;
        const favorite = checkbox.checked;

        movieDB.movies.push(newMovie);
        sortArr(movieDB.movies);
        
        createMovieList(movieDB.movies, movieList);

        e.target.reset();
    });
    
    deleteAdv(promoAdv);
    makeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
});

