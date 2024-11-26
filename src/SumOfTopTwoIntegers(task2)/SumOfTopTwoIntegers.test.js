const sumOfTopTwo = require('./SumOfTopTwoIntegers');

describe('sumOfTopTwo', () => {
    test('should return the sum of the two largest numbers', () => {
        expect(sumOfTopTwo([1, 4, 2, 3, 5])).toBe(9); // 5 + 4 = 9
        expect(sumOfTopTwo([10, 20, 30, 40])).toBe(70); // 40 + 30 = 70
        expect(sumOfTopTwo([5, 5, 5, 5])).toBe(10); // 5 + 5 = 10
    });

    test('should handle arrays with identical values', () => {
        expect(sumOfTopTwo([1, 2, 3, 5.6])).toBe(5); // 2 + 3 = 5
    });

    test('should return null if there are fewer than 2 elements', () => {
        expect(sumOfTopTwo([1])).toBeNull(); // Not enough elements
    });

    test('should handle an array with negative numbers', () => {
        expect(sumOfTopTwo([-1, -4, -3, -2])).toBe(-3); // -1 + -2 = -3
    });

    test('should handle empty arrays', () => {
        expect(sumOfTopTwo([])).toBeNull(); // Not enough elements
    });
});