import { getRandomNumberInRange, changeHoursFormat } from '../utils.js';
import { nanoid } from 'nanoid';
import { allComments } from './film-comments.js';

const MAX_RATING = 9;
const MIN_RUNTIME = 70;
const MAX_RUNTIME = 130;
const MAX_DESCRIPTIONS = 5;
const MIN_YEAR = 1950;
const MAX_YEAR = 2010;
const MAX_MONTH = 12;
const MAX_DAY = 30;
const TOTAL_GENRES = 3;

const AGE = ['0', '12+', '16+', '18+'];

const FILM_TITLES = [
  'Forrest Gump',
  'The Shawshank Redemption',
  'Raiders of the Lost Ark',
  'La chèvre',
  'Catch Me If You Can',
  'A Beautiful Mind',
  'Goodfellas',
  'The Fifth Element'
];

const POSTER_TITLES = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg'
];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const GENERATED_NAMES = [
  'Carolyn Wilkins',
  'Janice Banks',
  'Russell Smith',
  'Daniel Martin',
  'Chris Wilson',
  'Gary Martin',
  'Herbert Hall',
  'Jose Park',
  'Ryan Wheeler',
  'Evelyn Barber',
  'Dean Miller',
  'Crystal Dunn',
  'Barbara Lambert',
  'Ralph Jones',
  'Jane Hawkins',
  'Brian Powers',
  'Maurice Rodriguez',
  'Casey Smith',
  'Bernard Zimmerman',
  'Carla Sims'
];

const COUNTRY_NAMES = [
  'India',
  'USA',
  'China',
  'France',
  'Russia',
  'Japan',
  'Italy',
  'Finland'
];

const GENRES = [
  'Action',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Thriller'
];

const generateFilmTitle = () =>  FILM_TITLES[getRandomNumberInRange(0, FILM_TITLES.length)];

const generateFilmRating = () => `${getRandomNumberInRange(0, MAX_RATING)}.${getRandomNumberInRange(0, MAX_RATING)}`;

const getRandomPoster = () => POSTER_TITLES[getRandomNumberInRange(0, POSTER_TITLES.length)];

export const generateDescription = () => DESCRIPTIONS[getRandomNumberInRange(0, DESCRIPTIONS.length)];

const getDescriptions = () => {
  const descriptionCount = getRandomNumberInRange(1, MAX_DESCRIPTIONS);
  const filmDescription = [];
  for (let i = 0; i < descriptionCount; i++) {
    filmDescription.push(generateDescription());
  }
  return filmDescription;
};

const getRandomCountry = () => COUNTRY_NAMES[getRandomNumberInRange(0, COUNTRY_NAMES.length)];

const getRandomGenre = () => {
  const filmGenres = [];
  for (let i = 0; i < TOTAL_GENRES; i++) {
    filmGenres.push(GENRES[getRandomNumberInRange(0, GENRES.length)]);
  }
  return [...filmGenres];
};

const getAge = () => AGE[getRandomNumberInRange(0, AGE.length)];

const getFilmRuntime = () => {
  const generateRuntime = `${getRandomNumberInRange(MIN_RUNTIME, MAX_RUNTIME)}`;
  return changeHoursFormat(generateRuntime);
};

const getReleaseDate = () => {
  const generateDate = `${getRandomNumberInRange(MIN_YEAR, MAX_YEAR)}-${getRandomNumberInRange(1, MAX_MONTH)}-${getRandomNumberInRange(1, MAX_DAY)}`;
  return generateDate;
};

const generateFilmId = () => {
  const filmId = nanoid(10);
  allComments.push(filmId);
  return filmId;
};

export const getRandomName = () => GENERATED_NAMES[getRandomNumberInRange(0, GENERATED_NAMES.length)];

export const generateFilmCard = () => ({
  id: generateFilmId(),
  comments: '',
  filmInfo: {
    title: generateFilmTitle(),
    alternativeTitle: generateFilmTitle(),
    totalRating: generateFilmRating(),
    poster: `images/posters/${getRandomPoster()}`,
    ageRating: getAge(),
    director: getRandomName(),
    writers: [
      getRandomName()
    ],
    actors: [
      getRandomName()
    ],
    release: {
      'date': getReleaseDate(),
      'country': getRandomCountry()
    },
    runTime: getFilmRuntime(),
    genre: [
      getRandomGenre()
    ],
    description: getDescriptions()
  },
  userDetails: {
    watchlist: false,
    alreadyWatched: true,
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: false
  }
});
