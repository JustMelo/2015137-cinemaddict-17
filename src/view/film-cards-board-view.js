import { createElement } from '../render.js';

const createFilmCardsBoardTemplate = () => '<section class="films"></section>';

export default class FilmCardsBoardView {
  getTemplate() {
    return createFilmCardsBoardTemplate();
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
