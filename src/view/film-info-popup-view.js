import { Emoji } from '../mock/film-comments.js';
import { createElement } from '../render.js';
import { changeDateFormatComment, changeDateFormatPopup } from '../utils.js';

const createFilmCommentsTemplate = (filmCard, filmComments) => {
  let commentsContainer = '';
  const currentFilmComments = filmComments.filter((comment) => comment.id === filmCard.id);
  currentFilmComments.forEach((element) => {
    const {author, comment, date, emotion} = element;
    commentsContainer += (
      `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="${Emoji[emotion]}" width="55" height="55" alt="emoji-${emotion}">
        </span>
        <div>
          <p class="film-details__comment-text">${comment}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${author}</span>
            <span class="film-details__comment-day">${changeDateFormatComment(date)}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>`
    );
  });
  return commentsContainer;
};

const createFilmInfoTemplate = (filmCard, filmComments) => {
  const {title, alternativeTitle, totalRating, poster, release, runTime, genre, description, director, actors, writers, ageRating} = filmCard.filmInfo;
  const totalFilmComments = filmComments.filter((comment) => comment.id === filmCard.id);
  return (
    `<section class="film-details">
       <form class="film-details__inner" action="" method="get">
         <div class="film-details__top-container">
           <div class="film-details__close">
             <button class="film-details__close-btn" type="button">close</button>
           </div>
           <div class="film-details__info-wrap">
             <div class="film-details__poster">
               <img class="film-details__poster-img" src="${poster}" alt="${alternativeTitle}">

               <p class="film-details__age">${ageRating}</p>
             </div>

             <div class="film-details__info">
               <div class="film-details__info-head">
                 <div class="film-details__title-wrap">
                   <h3 class="film-details__title">${title}</h3>
                   <p class="film-details__title-original">Original: ${title}</p>
                 </div>

                 <div class="film-details__rating">
                   <p class="film-details__total-rating">${totalRating}</p>
                 </div>
               </div>

               <table class="film-details__table">
                 <tbody><tr class="film-details__row">
                   <td class="film-details__term">Director</td>
                   <td class="film-details__cell">${director}</td>
                 </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${writers}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${actors}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${changeDateFormatPopup(release.date)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${runTime}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${release.country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genres</td>
                  <td class="film-details__cell">
                    <span class="film-details__genre">${genre}</span>
                    <span class="film-details__genre"></span>
                    <span class="film-details__genre"></span></td>
                </tr>
                  </tbody>
                </table>

          <p class="film-details__film-description">
            ${description}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
        <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
        <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${totalFilmComments.length}</span></h3>

        <ul class="film-details__comments-list">
        ${createFilmCommentsTemplate(filmCard, filmComments)}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
      </div>
    </form>
    </section>`
  );
};

export default class FilmInfoPopupView {
  #element = null;

  constructor(filmCard, filmComments) {
    this.filmCard = filmCard;
    this.filmComments = filmComments;
  }

  get template() {
    return createFilmInfoTemplate(this.filmCard, this.filmComments);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
