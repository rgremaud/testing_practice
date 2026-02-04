import { analyzeArray } from "./analyzeArray";

test("Analyze array", () => {
  const values = analyzeArray([1, 2, 3]);
  
   expect(values.average).toBe(2);
   expect(values).toStrictEqual({
        "average": 2,
        "min": 1,
        "max": 3,
        "length": 3,
    });
});