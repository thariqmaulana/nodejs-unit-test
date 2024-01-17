//outer/global berpengaruh ke local/describe
//bisa nested describe

beforeAll(() => console.info("Before all outer"));
afterAll(() => console.info("After all outer"));

beforeEach(() => console.info("Before each outer"));
afterEach(() => console.info("After each outer"));

test("Outer test", () => console.info("Outer test"));

describe("Inner", () => {

  beforeAll(() => console.info("Before all inner"));
  afterAll(() => console.info("After all inner"));

  
  beforeEach(() => console.info("Before each inner"));//inner out - inn
  afterEach(() => console.info("After each inner"));// outer inn - out

  test("Inner test", () => console.info("Inner test"));
})