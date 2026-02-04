import { caesarCipher } from "./caesarCipher"

test("Caesar Cipher", () => {
  const string = caesarCipher('xyz', 3);
  const stringTwo = caesarCipher('x y z', 3);
  const stringThree = caesarCipher("xy z!", 3);
  
  expect(string).toBe("abc");
  expect(stringTwo).toBe("a b c")
  expect(stringThree).toBe("ab c!")
});