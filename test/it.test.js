import { sumAll } from "../src/sum"

describe("when call sumAll()", () => {
  it("should be 30 when the paramater [10,10,10]", () => {
    expect(sumAll([10,10,10])).toBe(30);
  })
})