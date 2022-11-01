import Grupo from "./grupo.mjs";
import Equipo from "./equipo.mjs";
import Prediccion from "./prediccion.mjs";
import Partido from "./partido.mjs";
import Sistema from "./sistema.mjs";


/*
let grupo = new Grupo("Shawarma", 13, false);
let grupo2 = new Grupo("AlfredoLTA", 11, true);
let lista = new ListaGrupos();

lista.agregar(grupo);
lista.agregar(grupo2);

for(let i = 0; i < l.length; i++){
    console.log(l[i].nombre);
}
*/
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

let l = sis.predicciones;
for(let i = 0; i < l.length; i++){
  console.log(l[i].local + " " + l[i].visitante);
}
console.log("----")
sis.agregarPrediccion(pre2);
l = sis.predicciones;
for(let i = 0; i < l.length; i++){
    console.log(l[i].local + " " + l[i].visitante);
  }
console.log("----")
sis.agregarPrediccion(pre3);
l = sis.predicciones;
for(let i = 0; i < l.length; i++){
    console.log(l[i].local + " " + l[i].visitante);
  }
  */

let sis = new Sistema();
/*
let equipos = sis.getEquipos();
$(document).ready(function ()
{
  let json = $.getJSON('../datos/datos.json', function(json)){
    let datos = json.equipos;
    for(i in datos)
    {
      equipos.push([datos[i].pais, datos[i].escudo]);
    }
  };
});*/
/*var json = [];
fetch('../datos/datos.json').then(response => json = response.json())
for(i in json)
    {
      console.log(json.arrayEquipos[i].pais)
    }*/
function readTextFile(file, callback) {
  var XMLHttpRequest = require('xhr2');
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

readTextFile("../datos/datos.json", function(jsonText){
  var obj = JSON.parse(jsonText);
  console.log(obj);
});