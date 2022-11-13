export default class Grupo {
  
  // nombre :: String, max, part :: int, priv :: bool
  constructor(nombre, part, max, priv){
    this.nombre = nombre;
    this.setPart(part);
    this.setMax(max);
    this.privado = priv;
  }

  /**
   * Pre: Recibe un int
   * Pos: Si el input es mayor a 0, cambia participantes
   * @param {*} part de tipo int
   */
   setPart(part){
    if (part > 0){
      this.participantes = part;
    }
    else {
      throw new Error('Tiene que haber algun jugador');
    }
  }

  /**
   * Pre: Recibe un int
   * Pos: Si el input es mayor a 1, cambia maximo
   * @param {*} max de tipo int
   */
  setMax(max){
    if (max > 1){
      this.maximo = max;
    }
    else {
      throw new Error('Tiene que haber por lo menos dos participantes en el grupo');
    }
  }
}