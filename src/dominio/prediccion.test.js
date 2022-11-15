
test('creación de una prediccion', () => {
  let unPartido = new Partido(1, "Barcelona", "Nacional");
  expect(unPartido.partido).toBe(1);
  expect(unPartido.local).toBe("Barcelona");
  expect(unPartido.visitante).toBe("Nacional");
});