
test("string", () => {
  const name = "Thariq Maulana";

  expect(name).toBe("Thariq Maulana");
  expect(name).toMatch(/ariq/);
})