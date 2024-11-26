function sumOfTopTwo(arr) {
    if (arr.length < 2) {
        return null;
    }
    
    // Filter out non-integer values
    arr = arr.filter(Number.isInteger);

    // Sort the array in descending order and sum the first two numbers
    arr.sort((a, b) => b - a);
    return arr[0] + arr[1];
}

module.exports = sumOfTopTwo;