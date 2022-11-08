import Grupo from "../../dominio/grupo.mjs";
import Equipo from "../../dominio/equipo.mjs";
import Prediccion from "../../dominio/prediccion.mjs";
import Partido from "../../dominio/partido.mjs";
import Sistema from "../../dominio/sistema.mjs";

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

//Pruebas
let sis = new Sistema();
let uru = new Equipo("Uruguay","https://paladarnegro.net/escudoteca/selecciones/selecciones/img/uruguay.jpg");
let cor = new Equipo("Corea","https://paladarnegro.net/escudoteca/selecciones/selecciones/img/coreadelsur.jpg");
let par = new Partido(1,uru,cor,"24/11",10,-1,-1);

let imageU = document.createElement("img"); //Aca tengo la foto
imageU.src = uru.escudo; 
imageU.width = "80"; 
imageU.height = "80";

let card = document.createElement('div');
card.classList.add("mdc-card");
let inter = document.createElement('div');
inter.classList.add("mdc-card__primary-action");
inter.tabIndex = "0";
let rip = document.createElement('div');
rip.classList.add("mdc-card__ripple");
let p = document.createElement('p');
p.appendChild(imageU);
inter.appendChild(p);
inter.appendChild(rip);
card.appendChild(inter);
document.getElementById("cartas").appendChild(card);