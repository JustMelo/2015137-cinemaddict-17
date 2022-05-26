import  AbstractView  from '../framework/view/abstract-view.js';

const createFilmCardsListTemplate =  () => '<div class="films-list__container"></div>';

export default class FilmCardsListView extends AbstractView {
  get template() {
    return createFilmCardsListTemplate();
  }
}
