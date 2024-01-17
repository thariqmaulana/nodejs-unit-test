import { sayHello } from "../src/sayHello"

test("sayHello success", () => {
  expect(sayHello("thariq")).toBe("Hello thariq");
})

test.failing("sayHello error", () => {
  sayHello(null);
})

test.failing("sayHello error 2", () => {
  //sepertinya karena ada failing maka tidak perlu expect. karena ini khusus error
  sayHello(undefined);
})

test("sayHello error matcher", () => {
  expect(() => sayHello(null)).toThrow();
})