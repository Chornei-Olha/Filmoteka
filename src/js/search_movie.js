import { ApiKey, page } from './refs';

const axios = require('axios').default;

// import allGenres from '../data/genres.json';

import { renderMoviesTrending } from './renderMoviesTrending';

const searchFilmForm = document.querySelector('.header__form');
const searchFilmInput = document.querySelector('.header__form-input');
const moviesElement = document.querySelector('.movies');

// let pError = document.querySelector('.header__error');
let inputValue = '';
// const URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${inputValue}&page=1&include_adult=false`;

// Создание нового свойства с годом (для всех)
// function createYear(obj) {
//   return obj.release_date ? obj.release_date.split('-')[0] : '';
// }

// Извлечение локальных жанров из json файла
// function getGenres() {
//   const { genres } = allGenres;
//   return genres;
// }g

async function fetchFilms(page) {
  try {
    const fetchResult = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${inputValue}&page=${page}&include_adult=false`
    );
    console.log(fetchResult.data);
    return fetchResult.data;
  } catch (error) {
    console.error(error);
  }
}

async function searchFilm(e) {
  e.preventDefault();
  inputValue = searchFilmInput.value;
  console.log(searchFilmInput.value);
  searchFilmForm.reset();
  moviesElement.innerHTML = '';
  await renderMoviesTrending(fetchFilms(page));
}

searchFilmForm.addEventListener('submit', searchFilm);

// .then(data => data.json())

// .then(res => {
//   console.log(res.results);
//   if (!res.results.length) {
//     pError.textContent =
//       'Search result not successful. Enter the correct movie name and try again.';
//   }
//   if (!!res.results.length) {
//     moviesList.innerHTML = '';
//     pError.textContent = '';
//   }
//   res.results.forEach(movie => {
//     moviesList.insertAdjacentElement(
//       'beforeend',
//       createCardFunc(
//         movie.poster_path,
//         movie.title,
//         movie.genre_ids,
//         movie.release_date
//       )
//     );
//   });
//   renderFilms = res.results;
//   return renderFilms;
// })
// .catch(err => console.log(err));