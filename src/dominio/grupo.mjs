export default class Grupo {
  
  // nombre :: String, max :: int, priv :: bool
  constructor(nombre, max, priv){
    this.nombre = nombre;
    this.setMax(max);
    this.privado = priv;
  }

  /**
   * Pre: Recibe un int
   * Pos: Si el input es mayor a 0, cambia participantes
   * @param {*} max de tipo int
   */
  setMax(max){
    if (max > 1){
      this.participantes = max;
    }
    else {
      throw new Error('Tiene que haber por lo menos dos participantes en el grupo');
    }
  }
}