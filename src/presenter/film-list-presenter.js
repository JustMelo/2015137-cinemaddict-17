import FilmCardsBoardView from '../view/film-cards-board-view.js';
import ButtonContainerView from '../view/button-show-more-container-view.js';
import FilmCardsListView from '../view/card-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/button-show-more-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import { render } from '../render.js';

const FILM_CARDS_COUNT = 5;

export default class FilmListPresenter {
  boardContainerComponent = new FilmCardsBoardView();
  filmCardsListComponent = new FilmCardsListView();
  buttonContainerComponent = new ButtonContainerView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(new FiltersView(), this.boardContainer);
    render(new SortView(), this.boardContainer);
    render(this.boardContainerComponent, this.boardContainer);
    render(this.buttonContainerComponent, this.boardContainerComponent.getElement());
    render(this.filmCardsListComponent, this.buttonContainerComponent.getElement());

    for (let i = 0; i < FILM_CARDS_COUNT; i++) {
      render(new FilmCardView(), this.filmCardsListComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.buttonContainerComponent.getElement());
  };
}
