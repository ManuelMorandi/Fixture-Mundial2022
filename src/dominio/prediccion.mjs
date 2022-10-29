export default class Prediccion {

  // local,visitante :: int
  constructor(partido, local, visitante){
    this.partido = partido;
    this.setLocal(local);
    this.setVis(visitante);
  }
  // Hay que ver como relacionarlo con el partido en si
  // Capaz poner id de partido como atributo?

  setLocal(goles){
    if(goles >= 0){
      this.local = goles;
    }
    else{
        throw new Error('Los goles marcados deben ser un numero mayor a cero');
    }
  }

  setVis(goles){
    if(goles >= 0){
      this.visitante = goles;
    }
    else{
        throw new Error('Los goles marcados deben ser un numero mayor a cero');
    }
  }
}