export default class Sistema {

  /**
   * Crea un objeto de la clase Sistema
   */
  constructor() {
    this.grupos = [];
    this.equipos = [];
    this.partidos = [];
    this.predicciones = [];
  }
    /**
     * VER BIEN EL TEMA DE JSDOCS
     * LUEGO GENERAMOS HTML CORRIENDO jsdocs <nombreArchivo>
     * @param {Object} grupo de tipo Grupo
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
   * Pre: -
   * Pos: Devuelve la lista de grupos existentes
   * @returns {Array} Array de elementos tipo Grupo
   */
  getGrupos() {
    return this.grupos;
  }

  /**
   * Pre: Recibe el equipo que se desea agregar
   * Pos: Si el equipo no se agrego ya, lo agrega a la lista de equipos existentes
   * @param {*} equipo de tipo Equipo
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
  * Pre: -
  * Pos: Devuelve la lista de equipos existentes
  * @returns Array de elementos tipo Equipo
  */
  getEquipos() {
    return this.equipos;
  }
  /**
   * Pre: Recibe un String
   * Pos: Devuelve el Equipo de ese pais
   * @param {} pais de tipo String 
   * @returns El objeto Equipo de ese pais
   */
  devolverEquipo(pais){
    for(let i = 0; i < this.getEquipos().length; i++){
      if(this.getEquipos()[i].pais === (pais)){
        return this.getEquipos()[i];
      }
    }
  }

  /**
   * Pre: Recibe el partido que se desea agregar
   * Pos: Si el partido no se agrego ya, lo agrega a la lista de partidos existentes
   * @param {*} partido de tipo Partido
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
  * Pre: -
  * Pos: Devuelve la lista de partidos existentes
  * @returns Array de elementos tipo Partido
  */
  getPartidos() {
    return this.partidos;
  }
  /**
   * 
   * @param {*} id 
   * @returns 
   */
  devolverPartido(id){
    for(let i = 0; i < this.getPartidos().length; i++){
      if(this.getPartidos()[i].id === id){
        return this.getPartidos()[i];
      }
    }
  }
  /**
   * 
   * @param {*} local 
   * @param {*} vis 
   * @returns 
   */
  partidoPorParticipantes(local, vis){
    for(let i = 0; i < this.getPartidos().length; i++){
      if(this.getPartidos()[i].local == local && this.getPartidos()[i].visitante == vis){
        return this.getPartidos()[i];
      }
    }
  }

  /**
   * Pre: Recibe la prediccion que se desea agregar
   * Pos: Si la prediccion no se agrego ya, lo agrega a la lista de predicciones existentes
   *      En otro caso, modifica la prediccion en la lista
   * @param {*} prediccion de tipo Prediccion
   */
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
  /**
   * Pre: Recibe una prediccion
   * Pos: Cambia los valores de local y visitante en la prediccion semejante guardada en la lista
   * @param {*} prediccion tipo Prediccion
   */
  modificarPrediccion(prediccion){
    let index = this.predicciones.findIndex(x => x.partido.id === prediccion.partido.id);
    this.predicciones[index].setLocal(prediccion.local);
    this.predicciones[index].setVis(prediccion.visitante);
  }
  /**
   * Pre: Recibe el id de un partido
   * Pos: Elimina la prediccion vinculada a ese partido de la lista de predicciones
   * @param {*} idPartido tipo int
   */
  eliminarPrediccion(idPartido){
    let index = this.predicciones.findIndex(x => x.id === idPartido);
    this.predicciones.splice(index, 1);
  }
  /**
  * Pre: -
  * Pos: Devuelve la lista de predicciones existentes
  * @returns Array de elementos tipo Prediccion
  */
  getPredicciones() {
    return this.predicciones;
  }
}