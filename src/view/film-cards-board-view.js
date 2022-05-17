import { createElement } from '../render.js';

const createFilmCardsBoardTemplate = () => '<section class="films"></section>';

export default class FilmCardsBoardView {
  #element = null;

  get template() {
    return createFilmCardsBoardTemplate();
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
