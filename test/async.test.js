import { sayHelloAsync } from "../src/async"

test("test async", async () => {
  const result = await sayHelloAsync("thariq");
  expect(result).toBe("Hello thariq");
})

test("test async matchers", async () => {
  await expect(sayHelloAsync("thariq")).resolves.toBe("Hello thariq");
  await expect(sayHelloAsync()).rejects.toBe("nama kosong");

})