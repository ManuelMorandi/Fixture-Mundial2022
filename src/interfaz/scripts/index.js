import {MDCTabBar} from '@material/tab-bar';
import {MDCRipple} from '@material/ripple';

// tabs inferiores
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

// cartas de partidos
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});