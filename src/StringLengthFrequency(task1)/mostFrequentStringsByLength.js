function mostFrequentStringsByLength(strings) {
    if (!Array.isArray(strings) || strings.length === 0) {
        return [];
    }

    const lengthFrequency = {};
    const lengthGroups = {};

    for (const str of strings) {
        const len = str.length;
        lengthFrequency[len] = (lengthFrequency[len] || 0) + 1;
        if (!lengthGroups[len]) {
            lengthGroups[len] = [];
        }
        lengthGroups[len].push(str);
    }

    const maxFrequency = Math.max(...Object.values(lengthFrequency));
    const mostFrequentLengths = Object.keys(lengthFrequency).filter(
        length => lengthFrequency[length] === maxFrequency
    );

    const result = [];
    for (const len of mostFrequentLengths) {
        result.push(...lengthGroups[len]);
    }

    return result;
}

module.exports = mostFrequentStringsByLength;
