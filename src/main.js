import UserRankView from './view/user-rank-view.js';
import FilmInfoPopupView from './view/film-info-popup-view.js';
import {render, RenderPosition} from './render.js';
import FilmListPresenter from './presenter/film-list-presenter.js';
import FilmCardsModel from './model/film-card-model.js';

const mainElement = document.querySelector('.main');
const userRankElement = document.querySelector('.header');
const filmInfoPopupElement = document.querySelector('.footer');

const filmCardsModel = new FilmCardsModel();
const filmListPresenter = new FilmListPresenter();

render(new UserRankView(), userRankElement);
render(new FilmInfoPopupView(), filmInfoPopupElement, RenderPosition.AFTEREND);


filmListPresenter.init(mainElement, filmCardsModel);
