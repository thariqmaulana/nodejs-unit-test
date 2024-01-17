import { MyExeption, callMe } from "../src/exception"

test("exception", () => {
  //memastikan terjadi error;
  expect(() => callMe("thariq")).toThrow();
  expect(() => callMe("thariq")).toThrow(MyExeption);
  expect(() => callMe("thariq")).toThrow("ups my exception happen");
})

test("exception not happens", () => {
  expect(callMe("another guy")).toBe("OK");
})