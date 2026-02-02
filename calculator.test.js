import { Calculator } from "./calculator";

test("Calculator is object", () => {
    const calculator = new Calculator()

    expect(typeof (calculator)).toBe("object");
});

test("Addition", () => {
    const calculator = new Calculator()

    expect(calculator.add(3, 2)).toBe(5);
})


test("Subtraction", () => {
    const calculator = new Calculator()

    expect(calculator.subtract(3, 2)).toBe(1);
})


test("Multiplication", () => {
    const calculator = new Calculator()

    expect(calculator.multiply(3, 2)).toBe(6);
})


test("Division", () => {
    const calculator = new Calculator()

    expect(calculator.divide(3, 2)).toBe(1.5);
})