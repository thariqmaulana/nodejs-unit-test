import { getBalance } from "../src/async";

test("mock async function test", async () => {
  const from = jest.fn();
  //untuk balance
  from.mockResolvedValueOnce(5000);

  //pakai equal kalau obj
  await expect(getBalance("thariq", from)).resolves.toEqual({
    name: "thariq",
    balance: 5000
  })

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(5000);
})

test.failing("rejected mock async function", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("terjadi error"));

  await getBalance("thariq", from);
})

test("rejected mock async function 2", async () => {
  const from = jest.fn();
  //penentuan error atau sukses ya dari methodnya ini. namanya juga nge test
  from.mockRejectedValueOnce("Rejected");

  //memanggil expect(isi).thThrow
  await expect(getBalance("thariq", from)).rejects.toBe("Rejected");
})  