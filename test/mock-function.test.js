import { calculate, calculateAndReturn } from "../src/sum";

test("test calculate", () => {
  const callback = jest.fn();

  //callback berisi parameter 30
  calculate([10,10,10], callback);
  calculate([10,10,10,10,10], callback);
  calculate([10,10,10,10,10,10,10], callback);

  //berapa kali dipanggil
  expect(callback.mock.calls.length).toBe(3);

  console.info(callback.mock.calls);

  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[2][1]).toBe("thariq");



})

test("test mock return value", () => {
  const callback = jest.fn();

  //apapun parameter yang dikirim
  // returnnya adalahyang kita isikan ini
  callback.mockReturnValueOnce(40);
  //pemanggilan kedua returnya akan 80
  callback.mockReturnValueOnce(80);

  // padahal hasil pethitungannya tidak seperti ini
  // tapi karena ini mock, alias membuat-buat, maka seperti ini
  expect(calculateAndReturn([10,10,10], callback)).toBe(40);
  expect(calculateAndReturn([10,10,10], callback)).toBe(80);

  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(80);
})

test("test mock implementation", () => {
  //ini untuk yang returnnya sesuai logic, tidak langsung kita tentukan
  //perbedaan dengan yg pertama adalah. Yang pertama tidak pakai logic, langsung return

  //membuat mock fn
  const callback = jest.fn();
  //totalll ini value return dari callback
  //data returnnya ditaruh di mana istilahnya kalau mau diolah melalui mockImp
  callback.mockImplementation((totalll) => {
    return totalll * 2
  })
  //penjelasan algoritma : 
  //callback disini kan akan mengembalikan 30. lalu 30 itu diolah di mockImplementation
  //dikalikan 2 maka hasilnya 60
  expect(calculateAndReturn([10,10,10], callback)).toBe(60);
  expect(calculateAndReturn([10,10,10,10,10], callback)).toBe(100);

  expect(callback.mock.results[0].value).toBe(60);
  expect(callback.mock.results[1].value).toBe(100);
})