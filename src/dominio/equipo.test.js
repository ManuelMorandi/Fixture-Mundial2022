import Equipo from './equipo.mjs'

test('creacion de un equipo', () => {
    let unEquipo = new Equipo("Uruguay","http://url.prueba");
    expect(unEquipo.pais).toBe("Uruguay");
    expect(unEquipo.escudo).toBe("http://url.prueba");
})