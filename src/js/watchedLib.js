import { openWatchedBtn } from './refs';
import { renderMoviesTrending } from './renderMoviesTrending';
const moviesElement = document.querySelector('.movies');

// const openWatchedBtn = document.querySelector('.js-watched');

openWatchedBtn.addEventListener('click', onWatchedBtnClick);

const testResults = [
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [18],
    id: 66249,
    original_language: 'ta',
    original_title: 'வள்ளி',
    overview:
      'Valli returns to her village after studying for 15 years in the city. Her cousin celebrates her arrival to the city. He is in love with Valli from childhood days. But got changed after she went to study in the city. She is no more in love with him.She falls in love with a city guy called Shekar who came to the village with his friends for hunting. Shekar cheats her and escapes from the city. Later shekar was brought back by her cousin. Instead of marrying the city guy she kills him for cheating.',
    popularity: 1.176,
    poster_path: '/zKnaVI1qn6Rp5HJcN54eDyUotnW.jpg',
    release_date: '1993-08-20',
    title: 'Valli',
    video: false,
    vote_average: 4,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: '/9WluqTBRcQI2WL53ulGr2OT0ew5.jpg',
    genre_ids: [28, 18],
    id: 278056,
    original_language: 'ml',
    original_title: 'വല്ല്യേട്ടന്‍',
    overview:
      'Madhavankutty is the Valliettan (Big Brother) of the Arackal family. The long lasting rivalry between the Arackal Madhavanunni and Patteri Sivaraman forms the main thread of the story. Madhavanunni along with his four brothers he rules the village. But Sivaraman with the help of Bava develops their plan to trap Madhavanunni.',
    popularity: 1.4,
    poster_path: '/aKaJahWUUzZhTcR8tGpmieI8xpG.jpg',
    release_date: '2000-09-01',
    title: 'Valliettan',
    video: false,
    vote_average: 6.3,
    vote_count: 9,
  },
  {
    adult: false,
    backdrop_path: '/igLDuz7qPeIhNS4U27fJTZT52R6.jpg',
    genre_ids: [35, 18],
    id: 563705,
    original_language: 'ml',
    original_title: 'വള്ളിക്കുടിലിലെ വെള്ളക്കാരന്‍',
    overview:
      'Vallikudilile Vellakkaran is a Malayalam movie starring Balu Varghese and Renji Panicker in prominent roles. It is a comedy drama directed by Mr.Duglus Alfred.',
    popularity: 1.183,
    poster_path: '/e9YTVyIstFkqHpqFk5bqe9eBPhm.jpg',
    release_date: '2018-11-09',
    title: 'Vallikudilile Vellakkaran',
    video: false,
    vote_average: 4,
    vote_count: 1,
  },
  {
    adult: false,
    backdrop_path: '/uVgTFwmP4Ohr7EgPkRXF8NizvjO.jpg',
    genre_ids: [18, 35],
    id: 572958,
    original_language: 'mr',
    original_title: 'भाई - व्यक्ती की वल्ली - पूर्वार्ध',
    overview:
      "Biopic of Marathi comedian, India's first stand-up comedian P. L. Deshpande.",
    popularity: 1.268,
    poster_path: '/jCxwSfvy5QcMkDQNzTieKq14xr0.jpg',
    release_date: '2019-01-04',
    title: 'Bhai: Vyakti Ki Valli - Poorvardha',
    video: false,
    vote_average: 8,
    vote_count: 1,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [28, 18],
    id: 976721,
    original_language: 'ta',
    original_title: 'வள்ளி மயில்',
    overview: '',
    popularity: 0.6,
    poster_path: '/zRD2ZsSARV0C1U9tlDEfkemZqdh.jpg',
    release_date: '',
    title: 'Valli Mayil',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [],
    id: 1013379,
    original_language: 'en',
    original_title: 'Frankie Valli & The Four Seasons: A Life On Stage',
    overview:
      'Take a trip down memory lane with the “Jersey Boys” on the 60th anniversary of the release of their first #1 hit, “Sherry.” The group that sold over 175 million records is captured live at the 10,000-seat Mohegan Sun Casino in Connecticut.',
    popularity: 0.6,
    poster_path: null,
    release_date: '',
    title: 'Frankie Valli & The Four Seasons: A Life On Stage',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
];

function onWatchedBtnClick() {
  //   moviesElement.innerHTML = '';
  renderMoviesTrending(testResults);
}
