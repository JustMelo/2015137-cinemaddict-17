import { generateFilmComments } from '../mock/film-comments.js';
import { generateFilmCard } from '../mock/film-data.js';
import { getRandomNumberInRange } from '../utils.js';

const FILM_CARDS_PORTION = 5;
const MAX_COMMENTS = 50;

export default class FilmCardsModel {
  #filmCards = Array.from({length: FILM_CARDS_PORTION}, generateFilmCard);
  #filmComments = Array.from({length: getRandomNumberInRange(1, MAX_COMMENTS)}, generateFilmComments);

  get filmCards() {
    return this.#filmCards;
  }

  get filmComments () {
    return this.#filmComments;
  }
}
