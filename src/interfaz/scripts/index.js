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

/* HARDCODE DE LOS DATOS */

let sis = new Sistema();
let e = new Equipo("Uruguay", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/uruguay.jpg");
sis.agregarEquipo(e);
e = new Equipo("Corea", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/coreadelsur.jpg");
sis.agregarEquipo(e);
e = new Equipo("Portugal", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/portugal.jpg");
sis.agregarEquipo(e);
e = new Equipo("Ghana", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/ghana.jpg");
sis.agregarEquipo(e);
e = new Equipo("Brasil", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/brasil.jpg");
sis.agregarEquipo(e);
e = new Equipo("Serbia", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/serbia.jpg");
sis.agregarEquipo(e);
e = new Equipo("Suiza", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/suiza.jpg");
sis.agregarEquipo(e);
e = new Equipo("Camerun", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/camerun.jpg");
sis.agregarEquipo(e);
e = new Equipo("Belgica", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/belgica.jpg");
sis.agregarEquipo(e);
e = new Equipo("Canada", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/canada.jpg");
sis.agregarEquipo(e);
e = new Equipo("Marruecos", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/marruecos.jpg");
sis.agregarEquipo(e);
e = new Equipo("Croacia", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/croacia.jpg");
sis.agregarEquipo(e);
e = new Equipo("Espana", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/espana.jpg");
sis.agregarEquipo(e);
e = new Equipo("CostaRica", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/costarica.jpg");
sis.agregarEquipo(e);
e = new Equipo("Alemania", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/alemania.jpg");
sis.agregarEquipo(e);
e = new Equipo("Japon", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/japon.jpg");
sis.agregarEquipo(e);
e = new Equipo("Tunez", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/tunez.jpg");
sis.agregarEquipo(e);
e = new Equipo("Australia", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/australia.jpg");
sis.agregarEquipo(e);
e = new Equipo("Dinamarca", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/dinamarca.jpg");
sis.agregarEquipo(e);
e = new Equipo("Francia", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/francia.jpg");
sis.agregarEquipo(e);
e = new Equipo("Argentina", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/argentina.jpg");
sis.agregarEquipo(e);
e = new Equipo("ArabiaSaudita", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/arabiasaudita.jpg");
sis.agregarEquipo(e);
e = new Equipo("Mexico", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/mexico.jpg");
sis.agregarEquipo(e);
e = new Equipo("Polonia", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/polonia.jpg");
sis.agregarEquipo(e);
e = new Equipo("Inglaterra", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/inglaterra.jpg");
sis.agregarEquipo(e);
e = new Equipo("Iran", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/iran.jpg");
sis.agregarEquipo(e);
e = new Equipo("EstadosUnidos", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/estadosunidos.jpg");
sis.agregarEquipo(e);
e = new Equipo("Gales", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/gales.jpg");
sis.agregarEquipo(e);
e = new Equipo("Qatar", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/qatar.jpg");
sis.agregarEquipo(e);
e = new Equipo("Ecuador", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/ecuador.jpg");
sis.agregarEquipo(e);
e = new Equipo("Senegal", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/senegal.jpg");
sis.agregarEquipo(e);
e = new Equipo("PaisesBajos", "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/paises-bajos.jpg");
sis.agregarEquipo(e);

e = new Partido(1,"Qatar","Ecuador","20/11",13,-1,-1);
sis.agregarPartido(e);
e = new Partido(2,"Inglaterra","Iran","21/11",13,-1,-1);
sis.agregarPartido(e);
e = new Partido(3,"Senegal","PaisesBajos","21/11",13,-1,-1);
sis.agregarPartido(e);
e = new Partido(4,"EstadosUnidos","Gales","21/11",16,-1,-1);
sis.agregarPartido(e);
e = new Partido(5,"Argentina","ArabiaSaudita","22/11",7,-1,-1);
sis.agregarPartido(e);
e = new Partido(6,"Dinamarca","Tunez","22/11",10,-1,-1);
sis.agregarPartido(e);
e = new Partido(7,"Mexico","Polonia","22/11",13,-1,-1);
sis.agregarPartido(e);
e = new Partido(8,"Francia","Australia","22/11",16,-1,-1);
sis.agregarPartido(e);
e = new Partido(9,"Marruecos","Croacia","23/11",7,-1,-1);
sis.agregarPartido(e);
e = new Partido(10,"Alemania","Japon","23/11",10,-1,-1);
sis.agregarPartido(e);
e = new Partido(11,"Espana","CostaRica","23/11",13,-1,-1);
sis.agregarPartido(e);
e = new Partido(12,"Belgica","Canada","23/11",7,-1,-1);
sis.agregarPartido(e);
e = new Partido(13,"Suiza","Camerun","24/11",7,-1,-1);
sis.agregarPartido(e);
e = new Partido(14,"Uruguay","Corea","24/11",10,-1,-1);
sis.agregarPartido(e);
e = new Partido(15,"Portugal","Ghana","24/11",13,-1,-1);
sis.agregarPartido(e);
e = new Partido(16,"Brasil","Serbia","24/11",16,-1,-1);
sis.agregarPartido(e);

/* FIN INTRODUCCION DE DATOS */

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
/*
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
  
}*/

/* FIN PRUEBAS CON LA LOGICA*/