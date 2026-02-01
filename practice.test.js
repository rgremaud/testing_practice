import { capitalize } from "./practice";

test("capitalize first letter of string", () => {
  // first char of string to equal toUppercase
  const stringOne = capitalize("test");
  const stringTwo = capitalize("romain9");
  expect(stringOne).toBe("Test");
  expect(stringTwo).toBe("Romain9");
});
