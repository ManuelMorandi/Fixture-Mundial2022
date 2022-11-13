import Grupo from "../../dominio/grupo.mjs";
import Equipo from "../../dominio/equipo.mjs";
import Prediccion from "../../dominio/prediccion.mjs";
import Partido from "../../dominio/partido.mjs";
import Sistema from "../../dominio/sistema.mjs";

document.getElementById("grupos-tab").style.display="none";
document.getElementById("fixture-tab").style.display="none";
document.getElementById("inicio-tab").style.display="block";
document.getElementById("perfil-tab").style.display="none";
document.getElementById("ajustes-tab").style.display="none";

import {MDCTabBar} from '@material/tab-bar';
import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

import {MDCTopAppBar} from '@material/top-app-bar';
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

import {MDCDataTable} from '@material/data-table';
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

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

let sis = new Sistema();

// Creacion Cards
let uru = new Equipo("Uruguay","https://paladarnegro.net/escudoteca/selecciones/selecciones/img/uruguay.jpg");
let cor = new Equipo("Corea","https://paladarnegro.net/escudoteca/selecciones/selecciones/img/coreadelsur.jpg");
let par = new Partido(1,uru,cor,"24/11",10,-1,-1);
let imageU = document.createElement("img"); //Aca tengo la foto
imageU.src = uru.escudo; 
imageU.width = "80"; 
imageU.height = "80";

/*
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
*/

// Creacion Data Tables
let gr = new Grupo("Prueba", 50, true);

let h = document.createElement('th');
let text1 = document.createTextNode(gr.nombre);
h.appendChild(text1);
let d1 = document.createElement('td');
let text2 = document.createTextNode("1/"+gr.participantes);
d1.appendChild(text2);
let d2 = document.createElement('td');
let text3 = document.createTextNode("USUARIO");
d2.appendChild(text3);
let r = document.createElement('tr');
r.classList.add("mdc-data-table__row");
r.appendChild(h);
r.appendChild(d1);
r.appendChild(d2);
document.getElementById("bodyTabla").appendChild(r);