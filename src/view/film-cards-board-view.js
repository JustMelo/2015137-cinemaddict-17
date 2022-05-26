import  AbstractView  from '../framework/view/abstract-view.js';

const createFilmCardsBoardTemplate = () => '<section class="films"></section>';

export default class FilmCardsBoardView extends AbstractView {
  get template() {
    return createFilmCardsBoardTemplate();
  }
}
