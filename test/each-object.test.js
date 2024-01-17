import { sumAll } from "../src/sum"

const table = [
  {numbers: [10,10,10], expected: 30},
  {numbers: [10,10,10,10,10], expected: 50},
  {numbers: [10,10,10,10,10,10,10,10,10,10], expected: 100},
]

test.each(table)("test sumAll($numbers) = $expected", ({numbers, expected}) => {
  expect(sumAll(numbers)).toBe(expected);
})

