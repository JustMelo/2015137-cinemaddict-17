import  AbstractView  from '../framework/view/abstract-view.js';
import { changeDateFormatCard } from '../utils.js';

const MAX_DESCRIPTION_LENGTH = 140;

const checkDescriptionLength = (someString) => someString.length > MAX_DESCRIPTION_LENGTH ? someString.slice(0, (MAX_DESCRIPTION_LENGTH - 1)).concat('...') : someString;

const createFilmCardTemplate = (filmCard, filmComments) => {
  const {title, alternativeTitle, totalRating, poster, release, runTime, genre, description} = filmCard.filmInfo;
  const totalFilmComments = filmComments.filter((comment) => comment.id === filmCard.id);
  const cardDescription = description.toString();
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
        <p class="film-card__description">${checkDescriptionLength(cardDescription)}
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

export default class FilmCardView extends AbstractView {
  #filmCard = null;
  #filmComments = null;

  constructor(filmCard, filmComments) {
    super();

    this.#filmCard = filmCard;
    this.#filmComments = filmComments;
  }

  get template() {
    return createFilmCardTemplate(this.#filmCard, this.#filmComments);
  }

  setShowPopupClickHandler = (callback) => {
    this._callback.clickShowPopup = callback;
    this.element.querySelector('img').addEventListener('click', this.#clickShowPopupHandler);
  };

  #clickShowPopupHandler = (evt) => {
    evt.preventDefault();
    this._callback.clickShowPopup();
  };
}
