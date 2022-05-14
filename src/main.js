import UserRankView from './view/user-rank-view.js';
import {render} from './render.js';
import FilmListPresenter from './presenter/film-list-presenter.js';
import FilmCardsModel from './model/film-card-model.js';

const mainElement = document.querySelector('.main');
const userRankElement = document.querySelector('.header');

const filmCardsModel = new FilmCardsModel();
const filmListPresenter = new FilmListPresenter();

render(new UserRankView(), userRankElement);

filmListPresenter.init(mainElement, filmCardsModel);
