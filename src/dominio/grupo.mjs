export default class Grupo {
  
  // nombre :: String, max :: int, priv :: bool
  constructor(nombre, max, priv){
    this.nombre = nombre;
    this.setMax(max);
    this.privado = priv;
  }

  setMax(max){
    if (max > 0){
      this.participantes = max;
    }
    else {
      throw new Error('Tiene que haber por lo menos un participante en el grupo');
    }
  }
}