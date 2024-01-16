import { MyExeption, callMe } from "../src/exception"

test("exeption", () => {
  //memastikan terjadi error;
  expect(() => callMe("thariq")).toThrow();
  expect(() => callMe("thariq")).toThrow(MyExeption);
  expect(() => callMe("thariq")).toThrow("ups my exeption happen");
})