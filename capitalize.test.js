import { capitalize } from "./capitalize";

test("Capitalize first letter of string", () => {
  const stringOne = capitalize("test");
  const stringTwo = capitalize("romain9");
  const stringThree = capitalize("/hotdog");
  const stringFour = capitalize("1more");
  expect(stringOne).toBe("Test");
  expect(stringTwo).toBe("Romain9");
  expect(stringThree).toBe("/hotdog");
  expect(stringFour).toBe("1more");
});