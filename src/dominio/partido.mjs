export default class Partido {

  // id :: int, local,visitante, fecha, hora :: String, resLocal,resVisitante :: int
  constructor(id, local, visitante, fecha, hora, resLocal, resVisitante){
    this.id = id;
    this.local = local;
    this.visitante = visitante;
    this.fecha = fecha;
    this.hora = hora;
    this.resLocal = resLocal;
    this.resVisitante = resVisitante;
  }
}