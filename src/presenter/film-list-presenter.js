import FilmCardsBoardView from '../view/film-cards-board-view.js';
import ButtonSectionView from '../view/button-show-more-container-view.js';
import FilmCardsListView from '../view/card-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/button-show-more-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import { render, RenderPosition } from '../render.js';
import FilmInfoPopupView from '../view/film-info-popup-view.js';

const filmInfoPopupElement = document.querySelector('.footer');

export default class FilmListPresenter {
  #boardContainer = null;
  #filmCards = null;

  #cardsContainerComponent = new FilmCardsBoardView();
  #filmCardsListComponent = new FilmCardsListView();
  #buttonSectionComponent = new ButtonSectionView();

  init = (boardContainer, filmCardsModel) => {
    this.boardContainer = boardContainer;
    this.filmCardsModel = filmCardsModel;
    this.filmCards = [...this.filmCardsModel.filmCards];
    this.filmComments = [...this.filmCardsModel.filmComments];

    render(new FiltersView(), this.boardContainer);
    render(new SortView(), this.boardContainer);
    render(this.#cardsContainerComponent, this.boardContainer);
    render(this.#buttonSectionComponent, this.#cardsContainerComponent.element);
    render(this.#filmCardsListComponent, this.#buttonSectionComponent.element);

    for (let i = 0; i < this.filmCards.length; i++) {
      this.#renderFilmCard(this.filmCards[i]);
    }

    // render(new FilmInfoPopupView(this.filmCards[4], this.filmComments), filmInfoPopupElement, RenderPosition.AFTEREND);
    this.#showPopup(this.filmCards[4]);
    render(new ShowMoreButtonView(), this.#buttonSectionComponent.element);
  };

  #showPopup = (filmCard) => {
    const popupFilmInfo = new FilmInfoPopupView(filmCard, this.filmComments);

    const hidePopupFilmInfo = () => {
      popupFilmInfo.element.querySelector('section.film-details').classList.add('visually-hidden');
    };

    popupFilmInfo.querySelector('button.film-details__close-btn').addEventListener('click', () => {
      hidePopupFilmInfo();
    });

    render(popupFilmInfo, filmInfoPopupElement, RenderPosition.AFTEREND);
  };

  #renderFilmCard = (filmCard) => {
    const filmCardComponent = new FilmCardView(filmCard, this.filmComments);

    const openPopupElement = () => {
      filmCardComponent.element.querySelector('section.film-details').classList.remove('visually-hidden');
    };

    filmCardComponent.element.querySelector('img').addEventListener('click', () => {
      openPopupElement();
    });

    render(filmCardComponent, this.#filmCardsListComponent.element);
  };

}

