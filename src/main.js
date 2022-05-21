import FilmListPresenter from './presenter/film-list-presenter.js';
import FilmCardsModel from './model/film-card-model.js';

const mainElement = document.querySelector('.main');

const filmCardsModel = new FilmCardsModel();
const filmListPresenter = new FilmListPresenter(mainElement, filmCardsModel);

filmListPresenter.init();
