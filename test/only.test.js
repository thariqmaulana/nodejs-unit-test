

test("test1", () => console.info("test 1"));
test("test2", () => console.info("test 2"));
test.only("test3", () => console.info("test 3"));
test.only("test4", () => console.info("test 4"));
test("test5", () => console.info("test 5"));
