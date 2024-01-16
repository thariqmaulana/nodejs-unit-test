
test("string.not", () => {
  const hewan = "ayam";

  expect(hewan).not.toBe("kambing");
  expect(hewan).not.toEqual("kambing");
  expect(hewan).not.toMatch(/ambi/);
})

test("numbers.not", () => {
  const result = 2 + 2;

  expect(result).not.toBeGreaterThan(6);
  expect(result).not.toBeLessThan(2);
  expect(result).not.toBe(10);
})