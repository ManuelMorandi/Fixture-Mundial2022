import Grupo from "../../dominio/grupo.mjs";
import Equipo from "../../dominio/equipo.mjs";
import Prediccion from "../../dominio/prediccion.mjs";
import Partido from "../../dominio/partido.mjs";
import Sistema from "../../dominio/sistema.mjs";
import { MDCTabBar } from '@material/tab-bar';
import {MDCRipple} from '@material/ripple';

const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));

tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});
/*
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});
*/
/* PRUEBAS CON LA LOGICA*/

import {MDCDataTable} from '@material/data-table';
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

/* datos de prueba */
let eq1 = new Equipo("Uruguay", "esta");
let eq2 = new Equipo("tuvieja", "en4");
const fecha = new Date();
fecha.getDate();

let par1 = new Partido(3, eq1, eq2, fecha, "19:32", -1, -1);
let par2 = new Partido(2, eq1, eq2, fecha, "19:32", -1, -1);

let pre1 = new Prediccion(par1, 0, 0);
let pre2 = new Prediccion(par2, 0, 1);
let pre3 = new Prediccion(par2, 2, 3);

let sis = new Sistema();
sis.agregarEquipo(eq1);
sis.agregarEquipo(eq2);
sis.agregarPartido(par1);

sis.agregarPrediccion(pre1);
sis.agregarPrediccion(pre2);
sis.agregarPrediccion(pre3);
/* Fin datos de prueba */

let l = sis.predicciones;

for(let i = 0; i < l.length; i++){
  let nodo = document.createElement('tr');
  nodo.classList.add("mdc-data-table__row");

  let nodoTh = document.createElement("th");
  nodoTh.classList.add("mdc-data-table__cell");
  nodoTh.setAttribute("scope", "row");
  nodoTh.appendChild(document.createTextNode(l[i].partido.id)); 
  nodo.appendChild(nodoTh); 

  let nodoTd1 = document.createElement("td");
  nodoTd1.classList.add("mdc-data-table__cell");
  nodoTd1.classList.add("mdc-data-table__cell--numeric");
  nodoTd1.setAttribute("scope", "row");
  nodoTd1.appendChild(document.createTextNode(l[i].partido.local.pais)); 
  nodo.appendChild(nodoTd1); 

  let nodoTd2 = document.createElement("td");
  nodoTd2.classList.add("mdc-data-table__cell");
  nodoTd2.classList.add("mdc-data-table__cell--numeric");
  nodoTd2.setAttribute("scope", "row");
  nodoTd2.appendChild(document.createTextNode(l[i].partido.visitante.pais)); 
  nodo.appendChild(nodoTd2); 

  let nodoTd3 = document.createElement("td");
  nodoTd3.classList.add("mdc-data-table__cell");
  nodoTd3.setAttribute("scope", "row");
  nodoTd3.appendChild(document.createTextNode(l[i].local + " - " + l[i].visitante)); 
  nodo.appendChild(nodoTd3); 

  tablita.appendChild(nodo);
}

/* FIN PRUEBAS CON LA LOGICA*/