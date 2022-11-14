import Grupo from './grupo.mjs'

test('creación de un grupo', () => {
  let unGrupo = new Grupo("Grupo1", 10, 15, true, "manuwu");
  expect(unGrupo.nombre).toBe("Grupo1");
  expect(unGrupo.part).toBe(10);
  expect(unGrupo.max).toBe(15);
  expect(unGrupo.priv).toBe(true);
  expect(unGrupo.lider).toBe(manuwu);
});