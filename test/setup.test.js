import { sum } from "../src/sum";

beforeAll(() => {
  console.info('Before all tests');
})

afterAll(() => {
  console.info("After all tests");
})

beforeEach(() => {
  console.info("Before each");
})

afterEach(() => {
  console.info("After each");
})

test("first test", () => {
  expect(sum(10,10)).toBe(20);
  console.info("First test completed");
})

test("second test", () => {
  expect(sum(100,10)).toBe(110);
  console.info("Second test completed");
})