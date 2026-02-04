export function analyzeArray(array) {
    const values = {
        "average": (array.reduce((prev, cur) => prev + cur, 0))/array.length,
        "min": Math.min(...array),
        "max": Math.max(...array),
        "length": array.length,
    }

    return values
}