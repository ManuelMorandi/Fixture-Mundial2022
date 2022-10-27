export default class ListaGrupos {

  constructor() {
    this.grupos = [];
  }
  
  // Implementamos que no se pueda repetir nombre de grupo?
  agregar(grupo) {
    this.grupos.push(grupo);
  }
  
  getGrupos() {
    return this.grupos;
  }
}