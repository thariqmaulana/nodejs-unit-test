import { sayHelloAsync } from "../src/async"

//masing-masing memakan waktu 1 detik 

// test("Concurrent 1", async () => {
//   await expect(sayHelloAsync("thariq")).resolves.toBe("Hello thariq")
// })

// test("Concurrent 2", async () => {
//   await expect(sayHelloAsync("thariq")).resolves.toBe("Hello thariq")
// })

// test("Concurrent 3", async () => {
//   await expect(sayHelloAsync("thariq")).resolves.toBe("Hello thariq")
// })

// 1 detik untuk semuanya
test.concurrent("Concurrent 1", async () => {
  await expect(sayHelloAsync("thariq")).resolves.toBe("Hello thariq")
})

test.concurrent("Concurrent 2", async () => {
  await expect(sayHelloAsync("thariq")).resolves.toBe("Hello thariq")
})

test.concurrent("Concurrent 3", async () => {
  await expect(sayHelloAsync("thariq")).resolves.toBe("Hello thariq")
})