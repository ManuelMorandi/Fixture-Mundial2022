import {MDCTabBar} from '@material/tab-bar';
import {MDCRipple} from '@material/ripple';

document.getElementById("grupos-tab").style.display="none";
document.getElementById("fixture-tab").style.display="none";
document.getElementById("inicio-tab").style.display="block";
document.getElementById("perfil-tab").style.display="none";
document.getElementById("ajustes-tab").style.display="none";

// cartas de partidos
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

// tabs inferiores
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.activateTab(2);
tabBar.listen("MDCTabBar:activated", function(event) {
  let index = event.detail.index; // Var que guarda el indice de la tab seleccionada
  if(index === 0){
    document.getElementById("grupos-tab").style.display="block";
    document.getElementById("fixture-tab").style.display="none";
    document.getElementById("inicio-tab").style.display="none";
    document.getElementById("perfil-tab").style.display="none";
    document.getElementById("ajustes-tab").style.display="none";
  }
  if(index === 1){
    document.getElementById("grupos-tab").style.display="none";
    document.getElementById("fixture-tab").style.display="block";
    document.getElementById("inicio-tab").style.display="none";
    document.getElementById("perfil-tab").style.display="none";
    document.getElementById("ajustes-tab").style.display="none";
  }
  if(index === 2){
    document.getElementById("grupos-tab").style.display="none";
    document.getElementById("fixture-tab").style.display="none";
    document.getElementById("inicio-tab").style.display="block";
    document.getElementById("perfil-tab").style.display="none";
    document.getElementById("ajustes-tab").style.display="none";
  }
  if(index === 3){
    document.getElementById("grupos-tab").style.display="none";
    document.getElementById("fixture-tab").style.display="none";
    document.getElementById("inicio-tab").style.display="none";
    document.getElementById("perfil-tab").style.display="block";
    document.getElementById("ajustes-tab").style.display="none";
  }
  if(index === 4){
    document.getElementById("grupos-tab").style.display="none";
    document.getElementById("fixture-tab").style.display="none";
    document.getElementById("inicio-tab").style.display="none";
    document.getElementById("perfil-tab").style.display="none";
    document.getElementById("ajustes-tab").style.display="block";
  }
});