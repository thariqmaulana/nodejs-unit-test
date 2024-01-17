import { sumAll } from "../src/sum"

const table = [
  [[10,10,10], 30],
  [[10,10,10,10,10], 50],
  [[10,10,10,10,10,10,10,10,10,10], 100]
]

test.each(table)("test sumAll(%s) = %i", (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected);
})
 
// const table = [
//   [
//     [10,10,10],
//      30
//   ],
//   [
//     [10,10,10,10,10], 
//     50
//   ],
//   [
//     [10,10,10,10,10,10,10,10,10,10],
//     100
//   ]
// ]

