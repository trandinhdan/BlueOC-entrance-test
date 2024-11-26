const mostFrequentStringsByLength = require('./mostFrequentStringsByLength');

describe('mostFrequentStringsByLength', () => {
    it('should return the most frequent string lengths', () => {
        // Test Case 1
        const input1 = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
        const expected1 = ['ab', 'cd', 'gh'];
        expect(mostFrequentStringsByLength(input1).sort()).toEqual(expected1.sort());

        // Test Case 2: Empty input
        const input4 = [];
        const expected4 = [];
        expect(mostFrequentStringsByLength(input4)).toEqual(expected4);

        // Test Case 3: Single element
        const input5 = ['x'];
        const expected5 = ['x'];
        expect(mostFrequentStringsByLength(input5)).toEqual(expected5);

        // Test Case 4: All strings of the same length
        const input6 = ['hello', 'world', 'apple', 'grape', 'mango'];
        const expected6 = ['hello', 'world', 'apple', 'grape', 'mango'];
        expect(mostFrequentStringsByLength(input6).sort()).toEqual(expected6.sort());

        // Test Case 5: Mixed lengths with ties
        const input7 = ['a', 'bb', 'ccc', 'dddd', 'ee', 'fff', 'g', 'hhhh', 'iii'];
        const expected7 = ['ccc', 'fff', 'iii'];
        expect(mostFrequentStringsByLength(input7).sort()).toEqual(expected7.sort());
    });
});
