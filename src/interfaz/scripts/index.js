import Grupo from "../../dominio/grupo.mjs";
import Equipo from "../../dominio/equipo.mjs";
import Prediccion from "../../dominio/prediccion.mjs";
import Partido from "../../dominio/partido.mjs";
import Sistema from "../../dominio/sistema.mjs";
import { MDCTabBar } from '@material/tab-bar';


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

/* PRUEBAS CON LA LOGICA*/

import {MDCDataTable} from '@material/data-table';
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

let nodo = document.createElement('tr');
nodo.classList.add("mdc-data-table__row");

let nodoTh = document.createElement("th");
nodoTh.classList.add("mdc-data-table__cell");
nodoTh.setAttribute("scope", "row");
let nodoTexto1 = document.createTextNode("test");
nodoTh.appendChild(nodoTexto1); 
nodo.appendChild(nodoTh); 

let nodoTd1 = document.createElement("td");
nodoTd1.classList.add("mdc-data-table__cell");
nodoTd1.classList.add("mdc-data-table__cell--numeric");
nodoTd1.setAttribute("scope", "row");
let nodoTexto2 = document.createTextNode("69");
nodoTd1.appendChild(nodoTexto2); 
nodo.appendChild(nodoTd1); 

let nodoTd2 = document.createElement("td");
nodoTd2.classList.add("mdc-data-table__cell");
nodoTd2.classList.add("mdc-data-table__cell--numeric");
nodoTd2.setAttribute("scope", "row");
let nodoTexto3 = document.createTextNode("69");
nodoTd2.appendChild(nodoTexto3); 
nodo.appendChild(nodoTd2); 

let nodoTd3 = document.createElement("td");
nodoTd3.classList.add("mdc-data-table__cell");
nodoTd3.setAttribute("scope", "row");
let nodoTexto4 = document.createTextNode("testeo pruba");
nodoTd3.appendChild(nodoTexto4); 
nodo.appendChild(nodoTd3); 

tablita.appendChild(nodo);

/* datos de prueba */
let eq1 = new Equipo("Uruguay", "esta");
let eq2 = new Equipo("tuvieja", "en4");
const fecha = new Date();
fecha.getDate();

let par1 = new Partido(3, eq1, eq2, fecha, "19:32", -1, -1);
let par2 = new Partido(2, eq1, eq2, fecha, "19:32", -1, -1);

let pre1 = new Prediccion(par1, 0, 0);
let pre2 = new Prediccion(par2, 0, 1);
let pre3 = new Prediccion(par2, 2, 2);

let sis = new Sistema();
sis.agregarEquipo(eq1);
sis.agregarEquipo(eq2);
sis.agregarPartido(par1);

sis.agregarPrediccion(pre1);
sis.agregarPrediccion(pre2);
sis.agregarPrediccion(pre3);

let l = sis.predicciones;
for(let i = 0; i < l.length; i++){
  let nodo = document.createElement('tr');
  nodo.classList.add("mdc-data-table__row");

  let nodoTh = document.createElement("th");
  nodoTh.classList.add("mdc-data-table__cell");
  nodoTh.setAttribute("scope", "row");
  let nodoTexto1 = document.createTextNode(l[i].partido.id);
  nodoTh.appendChild(nodoTexto1); 
  nodo.appendChild(nodoTh); 

  let nodoTd1 = document.createElement("td");
  nodoTd1.classList.add("mdc-data-table__cell");
  nodoTd1.classList.add("mdc-data-table__cell--numeric");
  nodoTd1.setAttribute("scope", "row");
  let nodoTexto2 = document.createTextNode(l[i].partido.local.pais);
  nodoTd1.appendChild(nodoTexto2); 
  nodo.appendChild(nodoTd1); 

  let nodoTd2 = document.createElement("td");
  nodoTd2.classList.add("mdc-data-table__cell");
  nodoTd2.classList.add("mdc-data-table__cell--numeric");
  nodoTd2.setAttribute("scope", "row");
  let nodoTexto3 = document.createTextNode(l[i].partido.visitante.pais);
  nodoTd2.appendChild(nodoTexto3); 
  nodo.appendChild(nodoTd2); 

  let nodoTd3 = document.createElement("td");
  nodoTd3.classList.add("mdc-data-table__cell");
  nodoTd3.setAttribute("scope", "row");
  let nodoTexto4 = document.createTextNode(l[i].local + " - " + l[i].visitante);
  nodoTd3.appendChild(nodoTexto4); 
  nodo.appendChild(nodoTd3); 

  tablita.appendChild(nodo);
}

/* FIN PRUEBAS CON LA LOGICA*/