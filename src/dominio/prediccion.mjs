// NOTA: No se va a usar esta clase, se deja por las dudas

export default class Prediccion {

  // local,visitante :: int
  constructor(partido, local, visitante){
    this.partido = partido;
    this.setLocal(local);
    this.setVis(visitante);
  }
  // Hay que ver como relacionarlo con el partido en si
  // Capaz poner id de partido como atributo?

  /**
   * Pre: Recibe un int
   * Pos: Si el int es mayor a 0, cambia local
   * @param {*} goles tipo int
   */
  setLocal(goles){
    if(goles >= 0){
      this.local = goles;
    }
    else{
        throw new Error('Los goles marcados deben ser un numero mayor a cero');
    }
  }

  /**
   * Pre: Recibe un int
   * Pos: Si el int es mayor a 0, cambia visitante
   * @param {*} goles tipo int
   */
  setVis(goles){
    if(goles >= 0){
      this.visitante = goles;
    }
    else{
        throw new Error('Los goles marcados deben ser un numero mayor a cero');
    }
  }
}