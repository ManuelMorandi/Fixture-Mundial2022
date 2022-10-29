export default class Sistema {

  constructor() {
    this.grupos = [];
    this.equipos = [];
    this.partidos = [];
    this.predicciones = [];
  }
    
  agregarGrupo(grupo) {
    let esta = this.grupos.some(m => m.nombre == grupo.nombre);
    if (!esta) {
      this.grupos.push(grupo);
    } else {
      throw new Error(`El nombre ya esta en uso.`);
    }
  }
  getGrupos() {
    return this.grupos;
  }

  agregarEquipo(equipo) {
    let esta = this.equipos.some(m => m.pais == equipo.pais);
    if (!esta) {
      this.equipos.push(equipo);
    } else {
      throw new Error(`El país ya existe.`);
    }
  }
  getEquipos() {
    return this.equipos;
  }

  agregarPartido(partido) {
    let esta = this.partidos.some(m => m.id == partido.id);
    if (!esta) {
      this.partidos.push(partido);
    } else {
      throw new Error(`El partido ya existe.`);
    }
  }
  getPartidos() {
    return this.partidos;
  }

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
  modificarPrediccion(prediccion){
    let index = this.predicciones.findIndex(x => x.partido.id === prediccion.partido.id);
    this.predicciones[index].setLocal(prediccion.local);
    this.predicciones[index].setVis(prediccion.visitante);
  }
  eliminarPrediccion(idPartido){
    let index = this.predicciones.findIndex(x => x.id === idPartido);
    this.predicciones.splice(index, 1);
  }
  getPredicciones() {
    return this.predicciones;
  }
}