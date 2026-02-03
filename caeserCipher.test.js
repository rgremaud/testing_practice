import { caesarCipher } from "./caesarCipher"

test("String Test", () => {
  const string = caesarCipher('xyz', 3);
  
  expect(string).toBe("abc");
});