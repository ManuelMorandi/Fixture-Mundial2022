export default class Sistema {

  /**
   * Crea una instacia de la clase Sistema.
   * @constructor
   */
  constructor() {
    this.grupos = [];
    this.equipos = [];
    this.partidos = [];
    this.predicciones = [];
  }
    
  /**
   * Agrega un Grupo a la lista de Grupos, si el nombre no esta en uso.
   * @param {Object} grupo - Objeto del Grupo que se va a agregar. 
   */
  agregarGrupo(grupo) {
    let esta = this.grupos.some(m => m.nombre == grupo.nombre);
    if (!esta) {
      this.grupos.push(grupo);
    } else {
      throw new Error(`El nombre ya esta en uso.`);
    }
  }
  /**
   * Devuelve la lista de Grupos.
   * @returns {Object[]} - Array con todos los objetos de la clase Grupo.
   */
  getGrupos() {
    return this.grupos;
  }

  /**
   * Agrega un Equipo a la lista de Equipos, si el nombre del pais no esta en uso.
   * @param {Object} equipo - Objeto del Equipo que se va a agregar. 
   */
  agregarEquipo(equipo) {
    let esta = this.equipos.some(m => m.pais == equipo.pais);
    if (!esta) {
      this.equipos.push(equipo);
    } else {
      throw new Error(`El país ya existe.`);
    }
  }
  /**
   * Devuelve la lista de Equipos.
   * @returns {Object[]} - Array con todos los objetos de la clase Equipo.
   */
  getEquipos() {
    return this.equipos;
  }
  /**
   * Devuelve el objeto Equipo del pais solicitado.
   * @param {string} pais - Nombre del pais.
   * @returns {Object} - Objeto Equipo del pais solicitado.
   */
  devolverEquipo(pais){
    for(let i = 0; i < this.getEquipos().length; i++){
      if(this.getEquipos()[i].pais === (pais)){
        return this.getEquipos()[i];
      }
    }
  }

  /**
   * Agrega un Partido a la lista de Partidos, si el id no esta en uso.
   * @param {Object} partido - Objeto del Partido que se va a agregar. 
   */
  agregarPartido(partido) {
    let esta = this.partidos.some(m => m.id == partido.id);
    if (!esta) {
      this.partidos.push(partido);
    } else {
      throw new Error(`El partido ya existe.`);
    }
  }
  /**
   * Devuelve la lista de Partidos.
   * @returns {Object[]} - Array con todos los objetos de la clase Partido.
   */
  getPartidos() {
    return this.partidos;
  }
  /**
   * Devuelve el objeto Partido que tiene ese id.
   * @param {number} id - Identificador del partido a buscar.
   * @returns {Object} - Objeto del Partido solicitado.
   */
  devolverPartido(id){
    for(let i = 0; i < this.getPartidos().length; i++){
      if(this.getPartidos()[i].id === id){
        return this.getPartidos()[i];
      }
    }
  }
  /**
   * Devuelve el partido jugado por los dos equipos.
   * @param {string} local - Nombre del equipo local.
   * @param {string} vis - Nombre del equipo visitante.
   * @returns {Object} - Objeto del Partido solicitado.
   */
  partidoPorParticipantes(local, vis){
    for(let i = 0; i < this.getPartidos().length; i++){
      if(this.getPartidos()[i].local == local && this.getPartidos()[i].visitante == vis){
        return this.getPartidos()[i];
      }
    }
  }

  // NO UTILIZADA
  agregarPrediccion(prediccion) {
    let esta = this.predicciones.some(m => m.partido.id === prediccion.partido.id);
    if (!esta) {
      this.predicciones.push(prediccion);
    } else {
      //alert("Se modificará la predicción anterior");
      console.log("Se modificará la predicción anterior");
      this.modificarPrediccion(prediccion);
    }
  }
  // NO UTILIZADA
  modificarPrediccion(prediccion){
    let index = this.predicciones.findIndex(x => x.partido.id === prediccion.partido.id);
    this.predicciones[index].setLocal(prediccion.local);
    this.predicciones[index].setVis(prediccion.visitante);
  }
  // NO UTILIZADA
  eliminarPrediccion(idPartido){
    let index = this.predicciones.findIndex(x => x.id === idPartido);
    this.predicciones.splice(index, 1);
  }
  // NO UTILIZADA
  getPredicciones() {
    return this.predicciones;
  }
}