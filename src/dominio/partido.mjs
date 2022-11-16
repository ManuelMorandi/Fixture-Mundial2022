export default class Partido {

  // id :: int, local, visitante, fecha, hora :: String, resLocal,resVisitante :: int
  constructor(id, local, visitante, fecha, hora, resLocal, resVisitante){
    this.id = id;
    this.local = local;
    this.visitante = visitante;
    this.fecha = fecha;
    this.hora = hora;
    this.resLocal = resLocal;
    this.resVisitante = resVisitante;
    this.predLocal = -1;
    this.predVis = -1;
  }

  /**
   * Pre: Recibe un int
   * Pos: Si el int es mayor a 0, cambia predLocal
   * @param {*} goles tipo int
   */
   setLocal(goles){
    if(goles >= 0){
      this.predLocal = goles;
    }
    else{
        throw new Error('Los goles marcados deben ser un numero mayor a cero');
    }
  }

  /**
   * Pre: Recibe un int
   * Pos: Si el int es mayor a 0, cambia predVis
   * @param {*} goles tipo int
   */
  setVis(goles){
    if(goles >= 0){
      this.predVis = goles;
    }
    else{
        throw new Error('Los goles marcados deben ser un numero mayor a cero');
    }
  }
}