import { createElement } from '../render.js';

const createFilmCardsListTemplate =  () => '<div class="films-list__container"></div>';

export default class FilmCardsListView {
  getTemplate() {
    return createFilmCardsListTemplate();
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
