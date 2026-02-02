import {reverseString } from "./reverseString";

test("Reverse String", () => {
    const stringOne = reverseString("I like to eat food");
    const stringTwo = reverseString("raceCar");
    expect(stringOne).toBe("doof tae ot ekil I");
    expect(stringTwo).toBe("raCecar");
});