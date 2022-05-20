import { createElement } from '../render.js';

const createFilmCardsListTemplate =  () => '<div class="films-list__container"></div>';

export default class FilmCardsListView {
  #element = null;

  get template() {
    return createFilmCardsListTemplate();
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
