import  AbstractView  from '../framework/view/abstract-view.js';

const createButtonSectionTemplate = () => (
  `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
  </section>`
);

export default class ButtonSectionView extends AbstractView {
  get template() {
    return createButtonSectionTemplate();
  }
}
