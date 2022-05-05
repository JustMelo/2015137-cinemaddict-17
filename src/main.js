import UserRankView from './view/user-rank-view.js';
import FilmInfoPopupView from './view/film-info-popup-view.js';
import {render, RenderPosition} from './render.js';
import MainPresenter from './presenter/main-presenter.js';

const mainElement = document.querySelector('.main');
const userRankElement = document.querySelector('.header');
const filmInfoPopupElement = document.querySelector('.footer');
const mainPresenter = new MainPresenter();

render(new UserRankView(), userRankElement);
render(new FilmInfoPopupView(), filmInfoPopupElement, RenderPosition.AFTEREND);

mainPresenter.init(mainElement);
