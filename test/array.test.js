
test("array", () => {
  const animals = ["ayam", "kambing", "sapi"];

  expect(animals).toEqual(["ayam", "kambing", "sapi"]);
  expect(animals).toContain("kambing"); 
})

test("array object", () => {
   const animals = [
    {
      animals: "ayam"
    },
    {
      animals: "kambing"
    }
   ];
   expect(animals).toContainEqual({animals: "kambing"});
})