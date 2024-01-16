
test("test toBe", () => {
  const name = "Thariq";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Thariq");
})

test("test toEqual", () => {
  const person = {id: "thariq"};
  Object.assign(person, {name: "thariq"});

  //ekspektasinya isi objectnya sekarang seperti ini
  expect(person).toEqual({id: "thariq", name: "thariq"});
})