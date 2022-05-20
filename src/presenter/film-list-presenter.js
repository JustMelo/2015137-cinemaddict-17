import FilmCardsBoardView from '../view/film-cards-board-view.js';
import ButtonSectionView from '../view/button-show-more-container-view.js';
import FilmCardsListView from '../view/card-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/button-show-more-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import { render, RenderPosition } from '../render.js';
import FilmInfoPopupView from '../view/film-info-popup-view.js';
import { isEscapeKey } from '../utils.js';

const filmInfoPopupElement = document.querySelector('.footer');

export default class FilmListPresenter {
  #boardContainer = null;
  #filmCards = null;
  #filmComments = null;

  #cardsContainerComponent = new FilmCardsBoardView();
  #filmCardsListComponent = new FilmCardsListView();
  #buttonSectionComponent = new ButtonSectionView();

  init = (boardContainer, filmCardsModel) => {
    this.#boardContainer = boardContainer;
    this.filmCardsModel = filmCardsModel;
    this.#filmCards = [...this.filmCardsModel.filmCards];
    this.#filmComments = [...this.filmCardsModel.filmComments];

    render(new FiltersView(), this.#boardContainer);
    render(new SortView(), this.#boardContainer);
    render(this.#cardsContainerComponent, this.#boardContainer);
    render(this.#buttonSectionComponent, this.#cardsContainerComponent.element);
    render(this.#filmCardsListComponent, this.#buttonSectionComponent.element);

    for (let i = 0; i < this.#filmCards.length; i++) {
      this.#renderFilmCard(this.#filmCards[i]);
    }
    render(new ShowMoreButtonView(), this.#buttonSectionComponent.element);
  };

  #showPopup = (filmCard) => {
    const popupFilmInfoComponent = new FilmInfoPopupView(filmCard, this.#filmComments);

    const onEscKeyDown = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        document.removeEventListener('keydown', onEscKeyDown);
        document.body.querySelector('section.film-details').remove();
      }
    };

    function openPopup () {
      document.body.classList.add('hide-overflow');
      document.addEventListener('keydown', onEscKeyDown);
      popupFilmInfoComponent.element.querySelector('.film-details__close-btn').addEventListener('mouseup', () => {
        closePopup();
      });

      render(popupFilmInfoComponent, filmInfoPopupElement, RenderPosition.AFTEREND);
    }

    function closePopup () {
      document.body.classList.remove('hide-overflow');
      document.removeEventListener('keydown', onEscKeyDown);
      document.body.querySelector('section.film-details').remove();
    }

    if (document.body.querySelector('section.film-details')) {
      closePopup();
    }
    openPopup();
  };

  #renderFilmCard = (filmCard) => {
    const filmCardComponent = new FilmCardView(filmCard, this.#filmComments);

    filmCardComponent.element.querySelector('img').addEventListener('click', () => {
      this.#showPopup(filmCard);
    });

    render(filmCardComponent, this.#filmCardsListComponent.element);
  };

}

