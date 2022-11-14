import Partido from './partido.mjs';

test('creación de un partido', () => {
  let unPartido = new Partido(1, "Barcelona", "Nacional", "1/10/2023","21:00", 1, 1);
  expect(unPartido.id).toBe(1);
  expect(unPartido.local).toBe("Barcelona");
  expect(unPartido.visitante).toBe("Nacional");
  expect(unPartido.fecha).toBe("1/10/2023");
  expect(unPartido.hora).toBe("21:00");
  expect(unPartido.resLocal).toBe(1);
  expect(unPartido.resVisitante).toBe(1);
});