import { createElement } from '../render.js';
import { changeDateFormatCard } from '../utils.js';

const createFilmCardTemplate = (filmCard, filmComments) => {
  const {title, alternativeTitle, totalRating, poster, release, runTime, genre, description} = filmCard.filmInfo;
  const totalFilmComments = filmComments.filter((comment) => comment.id === filmCard.id);

  return (
    `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${changeDateFormatCard(release.date)}</span>
          <span class="film-card__duration">${runTime}</span>
          <span class="film-card__genre">${genre}</span>
        </p>
        <img src="${poster}" alt="${alternativeTitle}" class="film-card__poster">
        <p class="film-card__description">${description}
        </p>
        <span class="film-card__comments">${totalFilmComments.length} comments</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>`
  );
};

export default class FilmCardView {
  constructor(filmCard, filmComments) {
    this.filmCard = filmCard;
    this.filmComments = filmComments;
  }

  getTemplate() {
    return createFilmCardTemplate(this.filmCard, this.filmComments);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
