const setMax = require('./setMax');

test('Si se ingresa un valor mayor a 0 cambia participantes', () => {
  expect(setMax(0)).toBe('Tiene que haber por lo menos dos participantes en el grupo');
  expect(setMax(1)).toBe(this.participantes == 1);
});